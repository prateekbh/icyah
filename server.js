const express = require('express');
const serveStatic = require('serve-static');
const compression = require('compression');
const app = express();
const rootDir = './';

app.use(compression());
app.use(serveStatic(rootDir));

app.listen(process.env.PORT||8080, ()=>{
 console.log('Serving ${rootDir} at 8080');
});
