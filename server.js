const express = require('express');
const serveStatic = require('serve-static');
const compression = require('compression');
const bodyParser = require('body-parser')
const path = require('path');
var fs = require('fs');

const rootDir = './';

const app = express();
app.use(bodyParser.json({limit: '2mb'}));

app.use(compression());
app.use(serveStatic(rootDir));

app.get("/awards",serveSite);
app.get("/aboutus",serveSite);
app.get("/fees",serveSite);
app.get("/abstract",serveSite);

app.post('/submitabstract',function(req,res){
	let data = req.body.file;
	data = data.replace('data:application/pdf;base64,','');
	fs.writeFile(
			path.join(process.cwd(),"abstracts","abstractby_"+req.body.name+"_at_"+new Date().toISOString()+".pdf"),
			data,
			{encoding: 'base64'},
			function(err) {

				if(err) {
						res.send(JSON.stringify({
							done: false
						}));
				}
				res.send(JSON.stringify({
					done: true
				}));

			});
})

function serveSite(req,res){
	res.sendFile(path.join(__dirname,'index.html'));
}

app.listen(process.env.PORT||8080, ()=>{
 console.log('Serving ${rootDir} at 8080');
});
