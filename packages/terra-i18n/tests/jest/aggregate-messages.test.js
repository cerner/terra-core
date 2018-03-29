const fs = require('fs');
const path = require('path');
const aggregateMessages = require('../../scripts/aggregate-translations/aggregate-messages');

global.console = { warn: jest.fn() };

const translationDirectories = [
  path.resolve(__dirname, 'fixtures', 'translations'),
  path.resolve(__dirname, 'fixtures', 'node_modules', 'fixtures1', 'translations'),
];
const locales = ['en', 'es', 'pt'];
const fileSystem = fs;

const expectedMessages = {
  'Terra.fixtures.test': 'Test...',
  'Terra.fixtures1.test': 'Test...',
};

describe('aggregates translations messages', () => {
  it('returns empty messages when no translations directories are provided', () => {
    const messages = aggregateMessages([], locales, fileSystem);

    expect(messages).toHaveProperty('en', {});
    expect(messages).toHaveProperty('es', {});
    expect(messages).toHaveProperty('pt', {});
  });

  it('logs a warning message if a translation file is not found', () => {
    aggregateMessages([__dirname], ['en'], fileSystem);

    // eslint-disable-next-line no-console
    expect(console.warn).toBeCalledWith(`Translation file en.json not found for ${__dirname}`);
  });

  it('aggregates the messages', () => {
    const messages = aggregateMessages(translationDirectories, locales, fileSystem);

    expect(messages).toHaveProperty('en', expectedMessages);
    expect(messages).toHaveProperty('es', expectedMessages);
    expect(messages).toHaveProperty('pt', expectedMessages);
  });
});
