const express = require('express')
const path = require('path')
const port = process.env.PORT || 4000
const app = express()

app.get('/list', function (request, response){
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  response.header('Access-Control-Allow-Headers', 'Content-Type');

  response.send(JSON.stringify(['this', 'list', 'was', 'loaded', 'from', 'the', 'internet']))
})

app.listen(port)
console.log("server started on port " + port)