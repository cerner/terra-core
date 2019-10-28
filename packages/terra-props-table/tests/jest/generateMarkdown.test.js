const generateMarkdown = require('../../bin/generateMarkdown/generateMarkdown');

const invalidInput = {};

describe('generateMarkdown with invalid input', () => {
  it('should throw an error', () => {
    expect(() => {
      generateMarkdown('ComponentName', invalidInput);
    }).toThrow();
  });
});

describe('generateMarkdown with valid input', () => {
  it('should generate a markdown table', () => {
    const validInput = {
      description: '',
      methods: [],
      props:
      {
        children:
      {
        type: { name: 'string', value: 'asdf' },
        required: true,
        description: 'The component that will be wrapped by i18n provider.',
      },
        locale:
        {
          type: { name: 'string', value: 'asdf' },
          required: true,
          description: 'The locale name.',
        },
        messages:
        {
          type: { name: 'string', value: 'asdf' },
          required: true,
          description: 'Translations messages object.',
        },
      },
    };

    expect(generateMarkdown('ComponentName', validInput)).toMatchSnapshot();
  });
});
