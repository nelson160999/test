var express = require('express')
const https=require('https')
const fs=require('fs')
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get("/", function (request, response) {
  response.send('Simple WhatsApp Webhook tester</br>There is no front-end, see server.js for implementation!');
});

app.get('/webhook', function(req, res) {
  console.log(req.query)
  if (
    req.query['hub.mode'] == 'subscribe' &&
    req.query['hub.verify_token'] == 'token'
  ) {
    res.send(req.query['hub.challenge']);
  } else {
    res.sendStatus(200);
  }
});

app.post("/webhook", function (request, response) {
  console.log('Incoming webhook: ' + JSON.stringify(request.body));
  response.sendStatus(200);
});

var listener = app.listen(8001, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});