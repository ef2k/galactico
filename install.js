#!/usr/bin/env node

var fs = require('fs')
  , path = require('path');


// Make a symbolic link to the templates directory.

var galacticoDir = path.join(process.env.HOME, '.galactico');
var moduleDir = path.resolve(__dirname, 'templates');

fs.symlink(moduleDir, galacticoDir, 'dir', function (err) {
  if (!err) {
    console.log('Successfully created the .galactico folder!');
  } else {
    console.error('Failed to create the .galactico folder');
  }
});