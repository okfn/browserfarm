var emitStream = require('emit-stream')
var JSONStream = require('JSONStream')
var websocket = require('websocket-stream')

var client = websocket('ws://localhost:9000')
client = client.pipe(JSONStream.parse([true]))
var events = emitStream(client)
events.on('foo', function(data) { console.log(data) })
