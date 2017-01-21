const UserManagement = require('user-management');

function initUsers(cb){
	const users = new UserManagement({database: 'icyah'});
	users.load(function(err) {
		if(err){
			console.log('CANNOT LOAD USERS')
		} else {
			cb(users);
		}
	});
}

function loginUser(uname, pwd){
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
					extras.token = token;
					resolve(extras);
				}
			});
		});
	});
}

function submitAbstractForToken(token){
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

module.exports = {
    initUsers,
    loginUser,
	getUserFromToken,
	submitAbstractForToken
};