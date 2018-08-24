const generatePropType = require('./generatePropType');

const generatePropRow = (propName, prop) => (
  `| ${propName || ''}`
    + `| ${prop.type ? generatePropType(prop.type) : ''}`
    + `| ${prop.required ? '`required`' : 'optional'}`
    + `| ${prop.defaultValue ? `\`${prop.defaultValue.value}\`` : ''}`
    + `| ${prop.description ? prop.description.replace(/\n|\r/g, ' ') : ''}`
    + '|'
);

module.exports = generatePropRow;
