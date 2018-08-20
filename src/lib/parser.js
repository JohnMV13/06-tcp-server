'use strict';

exports.parser = function(line, emitCallback) {
  if (line === '\r\n') {
    return emitCallback;
  }
  emitCallback('@all', line);

  /*
  if line starts with @all, emit @all message
  if line starts with @dm <name> message, 
    emit @dm with [name, message]
  */
};
