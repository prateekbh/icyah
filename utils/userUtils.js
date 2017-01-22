const UserManagement = require('user-management');

function initUsers(cb) {
	const users = new UserManagement({
		hostname: process.env.MONGO_SERVER || 'localhost',
		port: process.env.MONGO_PORT || 27017,
		database: process.env.MONGO_DB || 'icyah',
	});
	users.load(function(err) {
		if(err){
			console.log('CANNOT LOAD USERS')
		} else {
			cb(users);
		}
	});
}

function loginUser(uname, pwd) {
	return new Promise((resolve, reject)=>{
		initUsers(users=>{
			users.authenticateUser(uname, pwd, function(err, result) {
				if (err) {
					reject(err);
				} else if (!result.userExists) {
					reject('Invalid username');
				} else if (!result.passwordsMatch) {
					reject('Invalid password');
				} else {
					getUserFromToken(result.token).then(data=>{
						resolve(data);
					}).catch(err=>{
						reject(err);
					});
				}
				users.close();
			});
		})
	});
}

function getUserFromToken(token) {
	return new Promise((resolve, reject)=>{
		initUsers(users=>{
			users.getExtrasForToken(token, function(err, extras) {
				users.close();
				if (err) {
					reject(err);
				} else {
					if (extras) {
						extras.token = token;
					}
					resolve(extras);
				}
			});
		});
	});
}

function submitAbstractForToken(token) {
	return new Promise((resolve, reject)=>{
		initUsers(users=>{
			users.getExtrasForToken(token, function(err, extras) {
				if (err) {
					users.close();
					reject(err);
				} else {
					users.setExtrasForToken(token, Object.assign({}, extras, {abstractSubmitted: true}), (err) => {
						if (err) {
							reject(err);
						}
						resolve();
					});
				}
			});
		});
	});
}

function registerUser(token, registeredForConf, registeredForWorkshop, occupation) {
	return new Promise((resolve, reject)=>{
		initUsers(users=>{
			users.getExtrasForToken(token, function(err, extras) {
				if (err) {
					users.close();
					reject(err);
				} else {
					const newVal = Object.assign({}, extras, {
						registrationDone: true,
						registeredForConf,
						registeredForWorkshop,
						occupation,
					});
					users.setExtrasForToken(token, newVal, (err) => {
						if (err) {
							reject(err);
						}
						resolve(newVal);
					});
				}
			});
		});
	});
}

function userPaid(token, payment_id, amount, paymentdata) {
	return new Promise((resolve, reject)=>{
		initUsers(users=>{
			users.getExtrasForToken(token, function(err, extras) {
				if (err) {
					users.close();
					reject(err);
				} else {
					const newVal = Object.assign({}, extras, {
						paymentDone: true,
						payment_id,
						amount,
						paymentdata
					});
					users.setExtrasForToken(token, newVal, (err) => {
						if (err) {
							reject(err);
						}
						resolve(newVal);
					});
				}
			});
		});
	});
}

module.exports = {
    initUsers,
    loginUser,
	getUserFromToken,
	submitAbstractForToken,
	registerUser,
	userPaid,
};