'use strict';

const user = {};

exports.addUser = function (user) {
  users[user.id] = user;
}

exports.forEach = function (callback) {
  Object.values(user)
    .forEach(callback);
};
