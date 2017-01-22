const express = require('express');
const Razorpay = require('Razorpay');
const router = express.Router();
const {initUsers, loginUser, registerUser, userPaid} = require('../utils/userUtils');

router.post('/create', (req, res) => {
	const extras = {
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		registrationDone: false,
		paymentDone: false,
		participantType: null,
		registeredForConf: false,
		registeredForWorkshop: false,
		abstractSubmitted: false,
		abstractStatus: 'NOT_SUBMITTED',
		occupation:'',
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

router.post('/register', (req, res) => {
	if(!req.cookies['sid']){
		res.status(400).send({done: false});
		return;
	} else {
		registerUser(req.cookies['sid'], 
			req.body.attendingConf || false, 
			req.body.attendingWorkshop || false, 
			req.body.occupation || null).then((val)=>{
			res.send(JSON.stringify(val));
		}).catch(()=>{
			res.status(500).send(JSON.stringify({done: false}));
		});
	}
});

router.post('/pay', (req, res) => {
	if(!req.cookies['sid']){
		res.status(400).send({done: false});
		return;
	} else {
		var instance = new Razorpay({
			key_id: 'rzp_test_TrPU5mYt8jVAkR',
			key_secret: 'F3ZVUFeYyWCkTNnhX2zAeP0e'
		});
		instance.payments.capture(req.body.payment_id, req.body.amount)
		.then(paymentData=>{
			userPaid(
				req.cookies['sid'], 
				req.body.payment_id,
				req.body.amount,
				paymentData).then((val)=>{
				res.send(JSON.stringify(val));
			}).then(userdata=>{
				delete userdata.paymentdata;
				res.status(200).send(JSON.stringify(userdata));
			}).catch(e=>{
				res.status(500).send(JSON.stringify({done: false}));	
			});
		}).catch(e=>{
			res.status(500).send(JSON.stringify({done: false}));
		});
	}
});

module.exports = router;