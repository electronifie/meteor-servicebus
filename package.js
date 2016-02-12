Package.describe({
  name: "electronifiejs:servicebus",
  summary: "Distributed service communication via servicebus architecture",
  version: "1.0.21",
  git: "https://github.com/electronifie/meteor-servicebus.git"
});

Npm.depends({
  "servicebus": "1.0.21"
});

Package.onUse(function(api) {
  api.addFiles('server/servicebus-audit-extend.js', 'server');
  api.addFiles('server/servicebus.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('electronifiejs:servicebus');
});

