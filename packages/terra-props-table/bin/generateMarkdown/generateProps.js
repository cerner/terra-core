const generatePropRow = require('./generatePropRow');

const generateProps = (props) => {
  const tableHeader = '| Prop Name | Type | Is Required | Default Value | Description |\n';
  const tableHeaderBottom = '|-|-|-|-|-|\n';

  return (
    `${tableHeader}${tableHeaderBottom}${
      Object.keys(props).sort().map(propName => generatePropRow(propName, props[propName])).join('\n')}`
  );
};

module.exports = generateProps;
