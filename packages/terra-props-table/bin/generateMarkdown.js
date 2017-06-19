const generatePropType = (type) => {
  if (type.name === 'enum') {
    type.name = typeof type.value[0].value;
  }

  return `\`${type.name}\``;
};

const generatePropRow = (propName, prop) => {
  return (
    `| ${propName}` +
    `| ${prop.type ? generatePropType(prop.type) : ''}` +
    `| ${prop.required ? '`required`' : 'optional'}` +
    `| ${prop.defaultValue ? `\`${prop.defaultValue.value}\`` : ''}` +
    `| ${prop.description ? prop.description.replace(/\n|\r/g, ' ') : ''}` +
    `|`
  );
}

const generateProps = (props) => {
  const tableHeader = '| Prop Name | Type | Is Required | Default Value | Description |\n';
  const tableHeaderBottom = '|-|-|-|-|-|\n';

  return (
    `${tableHeader}${tableHeaderBottom}${
    Object.keys(props).sort().map(propName => generatePropRow(propName, props[propName])).join('\n')}`
  );
};


const generateMarkdown = (componentMetadata) => {
  if(componentMetadata.props) {
    const markdownString = generateProps(componentMetadata.props);
    return markdownString;
  } else {
    throw 'componentMetadata does not contain props';
  }
};

module.exports = generateMarkdown;
