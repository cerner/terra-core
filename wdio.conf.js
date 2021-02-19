const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultWdioConfig = require('@cerner/terra-functional-testing/lib/config/wdio.conf');

const wdioConfig = defaultWdioConfig.config;

if (process.env.npm_package_name !== 'terra-core') {
  const directory = process.env.npm_package_name.replace('@cerner/', '');
  wdioConfig.specs = [path.join(__dirname, 'packages', directory, 'tests', 'wdio', '**', '*-spec.js')];
} else {
  wdioConfig.specs = [
    path.join(__dirname, 'packages', 'terra-action-footer', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-action-header', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-alert', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-arrange', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-avatar', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-card', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-cell-grid', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-content-container', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-demographics-banner', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-dialog', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-scroll', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-search-field', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-section-header', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-show-hide', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-signature', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-form-checkbox', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-form-field', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-form-fieldset', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-form-input', 'tests', 'wdio', '**', '*-spec.js'),
    path.join(__dirname, 'packages', 'terra-form-radio', 'tests', 'wdio', '**', '*-spec.js'),
  ];
}

const travis = process.env.TRAVIS;

if (travis) {
  wdioConfig.host = 'localhost';
}

exports.config = wdioConfig;
