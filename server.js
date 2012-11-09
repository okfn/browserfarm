var BinaryServer = require('binaryjs').BinaryServer

var urls = {}
var pages = {}
var workers = {}

var server = BinaryServer({port: 9000})

server.on('connection', function(client) {
  client.on('stream', function(stream, meta) {
    console.log(stream)
  })
})
