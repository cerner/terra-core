const generatePropType = require('../../bin/generateMarkdown/generatePropType');


describe('generatePropType', () => {
  it('should return node string', () => {
    expect(generatePropType({ name: 'node' })).toEqual('`node`');
  });


  it('should return object string', () => {
    expect(generatePropType({ name: 'object' })).toEqual('`object`');
  });


  it('should return string string', () => {
    expect(generatePropType({ name: 'string' })).toEqual('`string`');
  });


  it('should return string string', () => {
    const enumProp =
      { name: 'enum',
        value:
        [{ value: '\'default\'' },
       { value: '\'link\'' },
       { value: '\'primary\'' },
       { value: '\'secondary\'' }],
      };

    expect(generatePropType(enumProp)).toEqual('`string`');
  });


  it('should return string string', () => {
    const enumProp =
      { name: 'enum',
        value:
        [{ value: '2' },
       { value: '4' },
       { value: '6' },
       { value: '3' }],
      };

    expect(generatePropType(enumProp)).toEqual('`number`');
  });
});
