const express = require('express');
const serveStatic = require('serve-static');
const compression = require('compression');
const bodyParser = require('body-parser')
const path = require('path');
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const userApi = require('./routes/userapi');
const mustacheExpress = require('mustache-express');
const fs = require('fs');
const {getUserFromToken, submitAbstractForToken} = require('./utils/userUtils');
const cookieParser = require('cookie-parser');

const rootDir = './';
const app = express();

// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
const auth = {
  auth: {
    api_key: process.env.mail_key,
    domain: process.env.mail_domain
  }
}

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/');

app.use(bodyParser.json({limit: '2mb'}));

app.use(cookieParser());
app.use(compression());
app.use(serveStatic(rootDir));

app.get("/awards", serveSite);
app.get("/aboutus", serveSite);
app.get("/fees", serveSite);
app.get("/abstract", serveSite);
app.use("/user", userApi);

app.post('/submitabstract',function(req,res){
	if(!req.cookies['sid']){
		res.status(400).send({done: false});
		return;
	}
	let data = req.body.file;
	data = data.replace('data:application/pdf;base64,','');
	const fileName = path.join(process.cwd(),"abstracts","abstractby_"+req.body.name+"_at_"+new Date().toISOString()+".pdf")
	fs.writeFile(
			fileName,
			data,
			{encoding: 'base64'},
			function(err) {
				if(err) {
						res.send(JSON.stringify({
							done: false
						}));
				} else {
					nodemailerMailgun.sendMail({
					  from: process.env.mail_from,
					  to: process.env.mail_receiver,
					  subject: 'Abstract by '+ req.body.name,
					  text: 'Hi\n'+req.body.name+' has submitted the attached abstract, you can contact the author @: '+ req.body.email,
					  attachments: [
		          		{
							filename: 'abstract_'+req.body.name+'.png',
							content: new Buffer(data, 'base64'),
							cid: "abstractby_"+req.body.name+"_at_"+new Date().toISOString()+".pdf"
			        	}
		         	  ]
					}, function (err, info) {
					  if (err) {
					  	console.log(err)
					    res.send(JSON.stringify({
								done: false,
								err: err
							}));
					  }
					  else {
						submitAbstractForToken(req.cookies['sid']).then(()=>{
							res.send(JSON.stringify({done: true}));
						}).catch(()=>{
							res.status(500).send(JSON.stringify({done: false}));
						});
					  }
					});
				}
			}
	);
	
})

function serveSite(req,res){
	if (req.cookies && req.cookies['sid']) {
		getUserFromToken(req.cookies['sid']).then(user => {
			res.render('index',{
				user:JSON.stringify(user)
			});	
		}).catch(err=>{
			res.render('index',{
				user: 'null',
			});	
		});
	} else {
		res.render('index',{
			user: 'null',
		});
	}
}

app.listen(process.env.PORT||8080, ()=>{
 console.log('Serving ${rootDir} at 8080');
});
