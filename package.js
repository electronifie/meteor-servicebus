Package.describe({
  summary: "Distrubuted service communication via servicebus architecture",
  version: "0.0.5",
  git: "https://github.com/electronifie/meteor-servicebus.git"
});

Npm.depends({
  "servicebus": "1.0.0-rc6"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('electronifie:servicebus.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('electronifie:servicebus');
  api.addFiles('electronifie:servicebus-tests.js', 'server');
});

