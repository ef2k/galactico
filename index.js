var path = require('path');

var templates = {};
var modulePath =  path.resolve(__dirname, 'templates');

require('fs').readdirSync(modulePath).forEach(function (file) {
  var template = require('./templates/' + file).template;
  templates[template.name] = template;
});

exports.templates = module.exports.templates = templates;