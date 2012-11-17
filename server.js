var http = require('http')
var ecstatic = require('ecstatic')
var emitStream = require('emit-stream')
var JSONStream = require('JSONStream')
var EventEmitter = require('events').EventEmitter
var WebSocketServer = require('ws').Server
var websocket = require('websocket-stream')

var events = new EventEmitter()
var urls = {}
var pages = {}
var workers = {}

var server = http.createServer(ecstatic('assets'))

var wss = new WebSocketServer({server: server})

wss.on('connection', function(ws) {
  var stream = websocket(ws)
  emitStream(events)
    .pipe(JSONStream.stringify())
    .pipe(stream)
})

setInterval(function() {
  events.emit('foo', 'bar')
  // console.log('clients', server.clients)
}, 1000)

server.listen(9000)
