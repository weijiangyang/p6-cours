const express = require('express');
const https = require('https');
const fs = require('fs');
const port = 3000;

var key = fs.readFileSync(__dirname + '/https/localhost+2-key.pem');
var cert = fs.readFileSync(__dirname + '/https/localhost+2.pem');
var options = {
  key: key,
  cert: cert
};

app = express()
// app.get('/', (req, res) => {
//    res.send('Now using https..');
// });

var server = https.createServer(options, app);

server.listen(port, () => {
  console.log("server starting on port : " + port)
});