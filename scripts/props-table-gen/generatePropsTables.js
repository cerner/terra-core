const path = require('path');
const fs = require('fs');
/* eslint-disable import/no-extraneous-dependencies */
const glob = require('glob');
const reactDocs = require('react-docgen');
/* eslint-enable import/no-extraneous-dependencies */
/* eslint-disable no-console */

const fileExclusions = [
  'ActiveBreakpointContext.jsx',
  'withActiveBreakpoint.jsx',
  'ButtonGroupUtils.jsx',
];

const packagesDir = path.resolve(
  path.dirname(__dirname), '../packages',
);

const tableHeaderTemplate = '<thead><tr><th>Prop Name</th><th>Type</th><th>Is Required</th><th>Default Value</th><th>Description</th></tr></thead>';

const generateTable = (rowArray) => {
  const generatedTable = `<table>${tableHeaderTemplate}<tbody>${rowArray.join('')}</tbody><table>`;

  return generatedTable;
};

const createTableRow = (propValues) => {
  let currentRow = '<tr>';

  propValues.forEach((value) => {
    if (value && value !== undefined) {
      currentRow += `<td>${value}</td>`;
    }
  });
  currentRow += '</tr>';

  return currentRow;
};

const formatPropTable = (propTable) => {
  const [name, value] = propTable;
  const props = {};
  const customType = name === 'customMessages' ? 'custom' : name;
  const specialTypes = ['enum', 'union', 'arrayOf'];

  const typeCheck = specialTypes.indexOf(Object.values(value.type)[0][0]) > -1
    || customType
    ? Object.values(value.type)[0]
    : Object.values(value.type).join('');

  const shapeHandler = value.type.name === 'shape'
    ? `An object shaped like:<br /><pre>${JSON.stringify(value.type.value, null, 1)}</pre>`
    : undefined;

  propTable.forEach(() => {
    props.name = name;
    props.type = shapeHandler || typeCheck;
    props.required = Object.values(value.required) === true ? 'required' : 'optional';
    props.defaultValue = value.defaultValue ? Object.values(value.defaultValue)[0] : 'none';
    props.description = Object.values(value.description).join('').replace(/\r?\n|\r/g, ' ');
  });
  return props;
};

const formatMarkdown = (formattedProps) => {
  const propValues = Object.values(formattedProps);
  const tableRow = createTableRow(propValues);

  return tableRow;
};

const generateMarkdownFile = (component, dir, formattedProps) => {
  const componentPrefix = component.substring(0, component.length - 4);
  const fileName = `${dir}../docs/${componentPrefix}-props-table.md`;
  fs.writeFileSync(fileName, formattedProps);
};

const generateMarkdown = (component, dir, propTable) => {
  const formattedMarkdown = [];
  const propsArray = Object.entries(propTable);

  propsArray.forEach((propSet) => {
    if (propSet.indexOf('intl') > -1) return;
    formattedMarkdown.push(formatMarkdown(formatPropTable(propSet)));
  });
  const completeTable = generateTable(formattedMarkdown);

  return generateMarkdownFile(component, dir, completeTable);
};

const processFile = (dir, component) => {
  if (fileExclusions.indexOf(component) > -1 || !component.match(/^[^_]/g)) return;
  const currentFile = fs.readFileSync(dir + component);
  const parsedProps = reactDocs.parse(currentFile);

  generateMarkdown(component, dir, parsedProps.props);
};

const processPackageList = () => fs.readdirSync(packagesDir).map(component => path.join(packagesDir, `${component}/src/`))
  .forEach(dir => glob('*.jsx', { cwd: dir }, (err, files) => {
    if (err) console.log(err);
    if (files) {
      files.forEach(file => processFile(dir, file));
    }
  }));

processPackageList();
