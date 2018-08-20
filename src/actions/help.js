'use strict';

const events = require('../lib/events');
events.on('@help', (user) => {
  user.socket.erite('try @all <message>\r\n');
});