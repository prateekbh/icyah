const express = require('express');
const router = express.Router();
const {initUsers, loginUser} = require('../utils/userUtils');

router.post('/create', (req, res) => {
	const extras = {
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		paymentDone: false,
		abstractSubmitted: false,
		abstractStatus: 'NOT_SUBMITTED',
		verified: false,
	};

	initUsers(users => {
		users.userExists(req.body.username, function(err, exists) {
			if(err){
				res.status(500);
				res.send(JSON.stringify({
					error: 'DB_ERROR'
				}));
				return;
			}
			if (exists) {
				console.log('  User already exists');
				users.close();
				res.status(400);
				res.send(JSON.stringify({
					error: 'USER_EXISTS'
				}));
			} else {
				users.createUser(req.body.username, req.body.password, extras, function (err) {
					users.close();
					loginUser(req.body.username, req.body.password)
					.then((info)=>{
						res.status(201);
						res.cookie('sid', info.token, { maxAge: 24*60*60*1000 });
						res.send(info);
					})
					.catch((err)=>{
						res.status(400);
						res.send({
							err: 'INVALID_CREDENTIALS'
						});
					})
				});
			}
		});
	});
});

router.post('/login', (req, res) => {
	loginUser(req.body.username, req.body.password)
	.then((info)=>{
		res.status(200);
		res.cookie('sid', info.token, { maxAge: 24*60*60*1000 });
		res.send(info);
	})
	.catch((err)=>{
		res.status(400);
		res.send({
			err: 'INVALID_CREDENTIALS'
		});
	})
});

module.exports = router;