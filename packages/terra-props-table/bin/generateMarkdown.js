const generatePropType = (type) => {
  let values;
  if (Array.isArray(type.value)) {
    values = `(${
      type.value.map(typeValue => typeValue.name || typeValue.value).join(',')
      })`;
  } else {
    values = type.value;
  }

  return `\`${type.name}${values || ''}\``;
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
