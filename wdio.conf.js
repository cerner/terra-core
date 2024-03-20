// eslint-disable-next-line import/no-extraneous-dependencies
const { config } = require('@cerner/terra-functional-testing');

config.specs = ['packages/**/wdio/**/*-spec.js'];

exports.config = config;
