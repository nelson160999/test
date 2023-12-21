var express = require('express')
const https=require('https')
const fs=require('fs')
var bodyParser = require('body-parser')
var app = express();
const PORT = process.env.PORT || 3030;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get("/", function (request, response) {
  response.send('Comming Soon');
});


app.post("/webhook", function (request, response) {
  console.log('Incoming webhook: ' + JSON.stringify(request.body));
  response.sendStatus(200);
});

var listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

