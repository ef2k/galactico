var fs = require('fs')
  , path = require('path')
  , colors = require('colors')
  , templates = require('../').templates;

var build = function (template) {
  if (!template) {
    template = templates.oortcloud;
  } else {
    if (templates[template]) {
      template = templates[template];
    } else {
      return console.error('Template not found.');
    }
  }

  template.directories = template.directories || [];
  template.files = template.files || [];

  console.log("\n:: Galactico ::\n".bold);
  console.log("Building `" + template.name + "`...");

  var cwd = process.cwd()
    , checkMark = '✓ '.green
    , xMark = '✗ '.red
    , tab = '\t'
    , filesMsg = '...and the following files...';

  if (template.directories.length > 0) {
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
  } else {
    filesMsg = 'The following files have been created...';
  }

  console.log("\n" + filesMsg + "\n".bold);
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