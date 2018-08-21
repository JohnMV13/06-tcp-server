'use strict';

const events = require('../lib/events');
const socketPool = require('../lib/socket-pool');
events.on('@help', (user) => {
  socketPool.forEach(user => {
    user.socket.write(
       `Try turning it off and back on`
    );
  });
});