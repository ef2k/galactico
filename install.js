#!/usr/bin/env node

var fs = require('fs')
  , path = require('path');

var galacticoDir = path.join(process.env.HOME, '.galactico');
var templatesDir = path.resolve(__dirname, 'templates');

if (!fs.existsSync(galacticoDir)) {
  fs.mkdirSync(galacticoDir);
}

require('fs').readdirSync(templatesDir).forEach(function (file) {
  file = path.join(templatesDir, file);
  var outPath = path.join(galacticoDir, path.basename(file));
  fs.createReadStream(file).pipe(fs.createWriteStream(outPath, {flags: 'w'}));
});