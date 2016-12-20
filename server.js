const express = require('express');
const serveStatic = require('serve-static');
const compression = require('compression');
const app = express();
const rootDir = './';
const path = require('path');

app.use(compression());
app.use(serveStatic(rootDir));

app.get("/awards",serveSite);
app.get("/aboutus",serveSite);
app.get("/fees",serveSite);


function serveSite(req,res){
	res.sendFile(path.join(__dirname,'index.html'));
}
app.listen(process.env.PORT||8080, ()=>{
 console.log('Serving ${rootDir} at 8080');
});
