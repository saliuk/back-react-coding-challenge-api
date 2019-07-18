var express = require('express')
var app = express()
var server = require('http').createServer(app)
var port = 8085;
var io = require('socket.io')(server, {
  origins: 'localhost:3000',
})

var { onconnect } = require('./services/sockets/websocket.service')

onconnect(io)

server.listen(port, function() {
  console.log(`Server is listenings ${port} port`)
})
