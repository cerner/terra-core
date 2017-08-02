const generatePropType = require('../../bin/generateMarkdown/generatePropType');

describe('generatePropType', () => {
  it('should return "node" for node', () => {
    expect(generatePropType({ name: 'node' })).toEqual('`node`');
  });

  it('should return "object" for object', () => {
    expect(generatePropType({ name: 'object' })).toEqual('`object`');
  });

  it('should return "string" for string', () => {
    expect(generatePropType({ name: 'string' })).toEqual('`string`');
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
    expect(generatePropType(enumProp)).toEqual('`string`');
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
    expect(generatePropType(enumProp)).toEqual('`number`');
  });

  it('should return list of types for oneOfType', () => {
    const propType =
      { name: 'union',
        value:
        [{ name: 'string' }, { name: 'number' }],
      };
    expect(generatePropType(propType)).toEqual('`string or number`');
  });

  it('should return type for arrayOf', () => {
    const propType =
      { name: 'arrayOf',
        value:
        { name: 'string' },
      };
    expect(generatePropType(propType)).toEqual('`array of strings`');
  });

  it('should return object format for arrayOf shapes', () => {
    const propType =
      { name: 'arrayOf',
        value: {
          name: 'shape',
          value: { row: 'string', icon: 'element' },
        },
      };
    expect(generatePropType(propType)).toEqual('`array of objects structured like: {\n "row": "string",\n "icon": "element"\n}`');
  });

  it('should return object format for shape', () => {
    const propType =
      { name: 'shape',
        value: { row: 'string', icon: 'element' },
      };
    expect(generatePropType(propType)).toEqual('`an object structured like: {\n "row": "string",\n "icon": "element"\n}`');
  });
});
