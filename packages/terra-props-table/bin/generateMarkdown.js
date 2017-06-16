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

const generatePropDefaultValue = value => `\`${value.value}\``;

const generateProp = (propName, prop) => `| ${propName} | ${prop.type ? generatePropType(prop.type) : ''}  | ${prop.required ? '`required`' : 'optional'} | ${prop.defaultValue ? generatePropDefaultValue(prop.defaultValue) : ''} | ${prop.description ? prop.description.replace(/\n|\r/g, ' ') : ''} |`;


const generateProps = (props) => {
  const tableHeader = '| Prop Name | Type | Is Required | Default Value | Description | \n|-|-|-|-|-|';

  return (
    `${tableHeader}\n${
    Object.keys(props).sort().map(propName => generateProp(propName, props[propName])).join('\n')}`
  );
};


const generateMarkdown = (componentMetadata) => {
  const markdownString = generateProps(componentMetadata.props);

  return markdownString;
};

module.exports = generateMarkdown;
