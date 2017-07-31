const generatePropType = require('../../bin/generateMarkdown/generatePropType');

describe('generatePropType', () => {
  it('should return "node" for node', () => {
    const generatedPropType = generatePropType({ name: 'node' });
    expect(generatedPropType).toEqual('`node`');
    expect(generatedPropType).toMatchSnapshot();
  });

  it('should return "object" for object', () => {
    const generatedPropType = generatePropType({ name: 'object' });
    expect(generatedPropType).toEqual('`object`');
    expect(generatedPropType).toMatchSnapshot();
  });

  it('should return "string" for string', () => {
    const generatedPropType = generatePropType({ name: 'string' });
    expect(generatedPropType).toEqual('`string`');
    expect(generatedPropType).toMatchSnapshot();
  });

  it('should return "string" for enum', () => {
    const enumProp =
      { name: 'enum',
        value:
        [{ value: '\'default\'' },
       { value: '\'link\'' },
       { value: '\'primary\'' },
       { value: '\'secondary\'' }],
      };
    const generatedPropType = generatePropType(enumProp);
    expect(generatedPropType).toEqual('`string`');
    expect(generatedPropType).toMatchSnapshot();
  });

  it('should return "number" for enum', () => {
    const enumProp =
      { name: 'enum',
        value:
        [{ value: '2' },
       { value: '4' },
       { value: '6' },
       { value: '3' }],
      };
    const generatedPropType = generatePropType(enumProp);
    expect(generatedPropType).toEqual('`number`');
    expect(generatedPropType).toMatchSnapshot();
  });

  it('should return list of types for oneOfType', () => {
    const propType =
      { name: 'union',
        value:
        [{ name: 'string' }, { name: 'number' }],
      };
    const generatedPropType = generatePropType(propType);
    expect(generatedPropType).toEqual('`string or number`');
    expect(generatedPropType).toMatchSnapshot();
  });

  it('should return type for arrayOf', () => {
    const propType =
      { name: 'arrayOf',
        value:
        { name: 'string' },
      };
    const generatedPropType = generatePropType(propType);
    expect(generatedPropType).toEqual('`array of strings`');
    expect(generatedPropType).toMatchSnapshot();
  });

  it('should return object format for arrayOf shapes', () => {
    const propType =
      { name: 'arrayOf',
        value: {
          name: 'shape',
          value: { row: 'string', icon: 'element' },
        },
      };
    const generatedPropType = generatePropType(propType);
    expect(generatedPropType).toEqual('`array of objects structured like: {\n "row": "string",\n "icon": "element"\n}`');
    expect(generatedPropType).toMatchSnapshot();
  });

  it('should return object format for shape', () => {
    const propType =
      { name: 'shape',
        value: { row: 'string', icon: 'element' },
      };
    const generatedPropType = generatePropType(propType);
    expect(generatedPropType).toEqual('`an object structured like: {\n "row": "string",\n "icon": "element"\n}`');
    expect(generatedPropType).toMatchSnapshot();
  });
});
