Package.describe({
  name: 'ternopiljs:core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Core package for TernopilJS demos',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use([
    'templating'
  ], 'client');
  api.addFiles([
    'client/views/header/header.html',
    'client/views/header/header.js',
    'client/views/header/header.css'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('meteorjs:example-template');
  api.addFiles('meteorjs:example-template-tests.js');
});
