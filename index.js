var path = require('path');

var templates = {};
var galacticoDir = path.join(process.env.HOME, '.galactico');

require('fs').readdirSync(galacticoDir).forEach(function (file) {
  var template = require(path.resolve(galacticoDir, file)).template;
  templates[template.name] = template;
});

exports.templates = module.exports.templates = templates;