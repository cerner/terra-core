// eslint-disable-next-line import/no-extraneous-dependencies
const { config: wdioConfig } = require('@cerner/terra-functional-testing');

wdioConfig.specs = ['packages/**/wdio/**/*-spec.js']

exports.config = wdioConfig;
