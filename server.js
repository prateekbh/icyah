const express = require('express');
const serveStatic = require('serve-static');
const compression = require('compression');
const bodyParser = require('body-parser')
const path = require('path');
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

var fs = require('fs');

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

app.use(bodyParser.json({limit: '2mb'}));

app.use(compression());
app.use(serveStatic(rootDir));

app.get("/awards",serveSite);
app.get("/aboutus",serveSite);
app.get("/fees",serveSite);
app.get("/abstract",serveSite);

app.post('/submitabstract',function(req,res){
	console.log("=====================================================");
	console.log(
			process.env.mail_from,
			process.env.mail_receiver,
			auth
		);
	console.log("=====================================================");
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
					    res.send(JSON.stringify({
								done: true
							}));
					  }
					});
				}
			}
	);
})

function serveSite(req,res){
	res.sendFile(path.join(__dirname,'index.html'));
}

app.listen(process.env.PORT||8080, ()=>{
 console.log('Serving ${rootDir} at 8080');
});
