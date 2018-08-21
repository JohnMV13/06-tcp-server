'use strict';

const events = require('../lib/events');
const socketPool = require('../lib/socket-pool');

events.on('@nick', (client, name)=>{
  client.nick = name;
});