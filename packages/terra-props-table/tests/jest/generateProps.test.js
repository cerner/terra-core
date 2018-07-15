const generateProps = require('../../bin/generateMarkdown/generateProps');

describe('generateProps', () => {
  it('should return a props markdown table', () => {
    const props = {
      children:
    {
      type: { name: 'node' },
      required: true,
      description: 'The component that will be wrapped by i18n provider.',
    },
      locale:
      {
        type: { name: 'string' },
        required: true,
        description: 'The locale name.',
      },
      messages:
      {
        type: { name: 'object' },
        required: true,
        description: 'Translations messages object.',
      },
    };

    expect(generateProps(props)).toMatchSnapshot();
  });
});
