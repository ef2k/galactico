var oortcloud = {
  name: "oortcloud",
  description: "Meteor by oortcloud",
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

exports.template = oortcloud;