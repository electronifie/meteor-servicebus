Package.describe({
  summary: "Distrubuted service communication via servicebus architecture",
  version: "0.0.1",
  git: "https://github.com/electronifie/meteor-servicebus.git"
});

Npm.depends({
  "servicebus": "https://github.com/mateodelnorte/servicebus/archive/0ee888be254a2ff8cd778eec51d2ea69e918b451.tar.gz"
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

