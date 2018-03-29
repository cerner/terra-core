const generateTranslationFile = require('../../scripts/aggregate-translations/generate-translation-file');

describe('generate translations file', () => {
  let translationsFile;
  beforeAll(() => {
    const unsortedMessages = {
      'Terra.test.fixtures.test': 'Test...',
      'Terra.More.fixtures.test': 'Test...',
      'Terra.Fixtures1.test': 'Test...',
      'Terra.fixtures.test': 'Test...',
    };

    translationsFile = generateTranslationFile('en', unsortedMessages);
  });

  it('creates the translation file', () => {
    expect(translationsFile).toMatchSnapshot();
  });

  it('sorts the translation messages', () => {
    const sortedMessages = {
      'Terra.fixtures.test': 'Test...',
      'Terra.Fixtures1.test': 'Test...',
      'Terra.More.fixtures.test': 'Test...',
      'Terra.test.fixtures.test': 'Test...',
    };
    expect(translationsFile).toMatch(JSON.stringify(sortedMessages, null, 2));
  });
});
