#!/usr/bin/env node

var fs = require('fs')
  , path = require('path');

fs.mkdir(path.join(process.env.HOME, '.galactico'), function () {
  console.log('done');
});