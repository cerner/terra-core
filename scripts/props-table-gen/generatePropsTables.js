const path = require('path');
const fs = require('fs');
/* eslint-disable import/no-extraneous-dependencies */
const glob = require('glob');
const reactDocs = require('react-docgen');
/* eslint-enable import/no-extraneous-dependencies */
/* eslint-disable no-console */

const packagesDir = path.resolve(
  path.dirname(__dirname), '../packages',
);

const tableHeaderTemplate = '<thead><tr><th>Prop Name</th><th>Type</th><th>Is Required</th><th>Default Value</th><th>Description</th></tr></thead>';

const createTableRow = (propValues) => {
  const rowValues = Object.values(propValues);
  let currentRow = '<tr>';

  rowValues.forEach((value) => {
    currentRow += `<td>${value}</td>`;
  });
  currentRow += '</tr>';

  return currentRow;
};

const formatPropShape = (propShape) => {
  const [name, value] = propShape;
  const props = {};
  const customType = name === 'customMessages' ? 'custom' : name;
  const specialTypes = ['enum', 'union', 'arrayOf'];

  // Check for special prop types and handle them.
  const typeCheck = specialTypes.indexOf(Object.values(value.type)[0][0]) > -1
    || customType
    ? Object.values(value.type)[0]
    : Object.values(value.type).join('');

  // Check if prop type is an object shape.
  const shapeHandler = value.type.name === 'shape'
    ? `An object shaped like:<br /><pre>${JSON.stringify(value.type.value, null, 1)}</pre>`
    : undefined;

  // Construct props object for use in creating table rows.
  propShape.forEach(() => {
    props.name = name;
    props.type = shapeHandler || typeCheck;
    props.required = Object.values(value.required) === true ? 'required' : 'optional';
    props.defaultValue = value.defaultValue ? Object.values(value.defaultValue)[0] : 'none';
    props.description = Object.values(value.description).join('').replace(/\r?\n|\r/g, ' ');
  });
  return props;
};

const generateTable = (rowArray) => {
  const generatedTable = `<table>${tableHeaderTemplate}<tbody>${rowArray.join('')}</tbody><table>`;

  return generatedTable;
};

// Generate props table markdown files in each component's docs folder
const generateMarkdownFile = (component, dir, formattedProps) => {
  const componentPrefix = component.substring(0, component.length - 4);
  const fileName = `${dir}../docs/${componentPrefix}-props-table.md`;
  fs.writeFileSync(fileName, formattedProps);
};

const generateMarkdown = (component, dir, propTable) => {
  const formattedMarkdownRows = [];
  const propsArray = Object.entries(propTable);

  // Push completely formatted table rows to an array.
  propsArray.forEach((propSet) => {
    if (propSet.indexOf('intl') > -1) return;
    formattedMarkdownRows.push(createTableRow(formatPropShape(propSet)));
  });

  // Generate complete props table
  const completeTable = generateTable(formattedMarkdownRows);

  return generateMarkdownFile(component, dir, completeTable);
};

const processFile = (dir, component) => {
  if (!component.match(/^[^_]/g)) return;
  const currentFile = fs.readFileSync(dir + component, 'utf-8');

  // Check if imported file has a propTypes object.
  const propsCheck = JSON.stringify(currentFile);
  if (!propsCheck.includes('propTypes')) return;

  // Use react-docgen to extract props from the current component.
  const parsedProps = reactDocs.parse(currentFile);

  generateMarkdown(component, dir, parsedProps.props);
};

// Uses fs and glob to traverse the directory tree looking for .jsx files.
const processPackageList = () => fs.readdirSync(packagesDir).map(component => path.join(packagesDir, `${component}/src/`))
  .forEach(dir => glob('*.jsx', { cwd: dir }, (err, files) => {
    if (err) console.log(err);
    if (files) {
      files.forEach(file => processFile(dir, file));
    }
  }));

processPackageList();
