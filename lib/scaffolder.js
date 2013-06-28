var fs = require('fs')
  , path = require('path')
  , colors = require('colors');

/* Scaffolding templates */

var meteor = {
  name: "Meteor by OortCloud",
  directories: [
    'lib',
    'lib/external',
    'collections',
    'client',
    'client/lib',
    'client/lib/helpers',
    'client/views',
    'client/stylesheets',
    'server',
    'server/lib',
    'public',
    'tests'
  ],
  files: [
    'lib/environment.js',
    'lib/methods.js',
    'client/lib/environment.js',
    'client/application.js',
    'client/index.html',
    'client/index.js',
    'server/publications.js',
    'server/lib/environment.js'
  ]
};

var templates = {
  meteor: meteor
};

var build = function (template) {
  if (!template) {
    template = templates.meteor;
  }

  console.log("\n:: Galactico ::\n".bold);
  console.log("Building `" + template.name + "`...");

  var cwd = process.cwd()
    , checkMark = '✓ '.green
    , xMark = '✗ '.red
    , tab = '\t';

  console.log("\nThe following directories have been created...\n".bold);
  template.directories.forEach(function (dirPath) {
    var success = true;
    try {
      fs.mkdirSync(dirPath);
    } catch (err){
      success = false;
    }
    console.log(tab + (success ? checkMark : xMark) + dirPath);
  });

  console.log("\n...and the following files...\n".bold);
  template.files.forEach(function (filePath) {
    var success = true, fd;
    try {
      fd = fs.openSync(filePath, 'w');
      fs.closeSync(fd);
    } catch (e) {
      success = false;
    }
    console.log(tab + (success ? checkMark : xMark) + filePath);
  });
  console.log('\n');
};

exports.build = build;