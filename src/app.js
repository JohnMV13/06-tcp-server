'use strict';

const User = require('./models/user');
const events = require('./lib/events');
const { parser } = require('./lib/parser');
const socketPool = require('./lib/socket-pool');
const actions = require('./actions');

const net = require('net');
const server = net.createServer();

server.on('connection', function (socket) {
  const user = new User(socket);
  socketPool.addUser = new User(socket);
  socket.write(`Your user id is ${user.id}\r\n`);

  socket.on('data', function (data) {
    console.log(data);
    socket.line += data.toString();
    
    if(!socket.line.endsWith('\r\n'))
      return;

    console.log(socket.line);
    parser(socket.line, (event, ...args) => {
      events.emit(event, user, ...args);

    socket.line = '';
    })
  });
});



events.on('start', (portFromStartEvent) => {
  console.log(`Listening on port ${portFromStartEvent}!`);
});

//This one doesn't recieve start and is separate from the first emitter
// const events2 = events.events2;
// events2.on('start', (portFromStartEvent) => {
//   console.log(`EVENTS2: Listening on port ${portFromStartEvent}!`);
// });

exports.startServer = (port) => {
  server.listen(port, () => {
    events.emit('start', port);
  });
};