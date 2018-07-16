const generatePropRow = require('../../bin/generateMarkdown/generatePropRow');


it('should return a markdown row', () => {
  const propName = 'children';
  const prop = {
    type: { name: 'node' }, required: true, defaultValue: { value: 'center' }, description: 'The component(s) that will be wrapped by `<Base />`.',
  };

  expect(generatePropRow(propName, prop)).toMatchSnapshot();
});

describe('when type is not present', () => {
  it('should return a markdown row without type', () => {
    const propName = 'children';
    const prop = { required: true, defaultValue: { value: 'center' }, description: 'The component(s) that will be wrapped by `<Base />`.' };

    expect(generatePropRow(propName, prop)).toMatchSnapshot();
  });
});

describe('when required is not present', () => {
  it('should return a markdown row without required', () => {
    const propName = 'children';
    const prop = { type: { name: 'node' }, defaultValue: { value: 'center' }, description: 'The component(s) that will be wrapped by `<Base />`.' };

    expect(generatePropRow(propName, prop)).toMatchSnapshot();
  });
});

describe('when defaultValue is not present', () => {
  it('should return a markdown row without defaultValue', () => {
    const propName = 'children';
    const prop = { type: { name: 'node' }, required: true, description: 'The component(s) that will be wrapped by `<Base />`.' };

    expect(generatePropRow(propName, prop)).toMatchSnapshot();
  });
});

describe('when description is not present', () => {
  it('should return a markdown row without description', () => {
    const propName = 'children';
    const prop = { type: { name: 'node' }, required: true, defaultValue: { value: 'center' } };

    expect(generatePropRow(propName, prop)).toMatchSnapshot();
  });
});

describe('when propName is an empty string', () => {
  it('should return a markdown row with an empty propName', () => {
    const propName = '';
    const prop = {
      type: { name: 'node' }, required: true, defaultValue: { value: 'center' }, description: 'The component(s) that will be wrapped by `<Base />`.',
    };

    expect(generatePropRow(propName, prop)).toMatchSnapshot();
  });
});


describe('when propName is null', () => {
  it('should return a markdown row with an empty propName', () => {
    const propName = null;
    const prop = {
      type: { name: 'node' }, required: true, defaultValue: { value: 'center' }, description: 'The component(s) that will be wrapped by `<Base />`.',
    };

    expect(generatePropRow(propName, prop)).toMatchSnapshot();
  });
});

describe('when propName is undefined', () => {
  it('should return a markdown row with an empty propName', () => {
    let propName;
    const prop = {
      type: { name: 'node' }, required: true, defaultValue: { value: 'center' }, description: 'The component(s) that will be wrapped by `<Base />`.',
    };

    expect(generatePropRow(propName, prop)).toMatchSnapshot();
  });
});
