'use strict';

var Github = require('./node_modules/visualtesting-api/server/utils/github');
var Differ = require('./node_modules/visualtesting-api/server/utils/differ');
var storage = require('./node_modules/visualtesting-api/server/utils/storage');

var services = [];

if (process.env.GITHUB_BOT_TOKEN !== undefined) {
  services.push(new Github({
    botToken: process.env.GITHUB_BOT_TOKEN
  }));
}

function Apply(config) {
  config.set({
    port: 9000,

    services: services,

    differ: Differ,
    storage: storage
  });
}

module.exports = Apply;
