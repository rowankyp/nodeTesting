"use strict";
var net = require('net');
var port = 8888;
// Create the server object,
// which waits for client connections.
var server = net.createServer(connect);
server.listen(port);
// Called when a connect request comes in
// The argument is a socket.
function connect(client) {
	/*client.write("Authenticate> ");
	for(var i = 0; i < 2; i++){
		client.on('data', auth);
	}*/
	client.on('data',get);
function get(t) { /*echo(client, t);*/ process.stdout.write("> "); console.log(t.toString('utf8')); }

/*function auth(pass){
	if(pass == "password"){
		client.on('data', get);
	}
}*/

}