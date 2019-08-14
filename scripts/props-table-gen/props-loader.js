const path = require('path');
const fs = require('fs');
/* eslint-disable import/no-extraneous-dependencies */
const glob = require('glob');
const reactDocs = require('react-docgen');
/* eslint-enable import/no-extraneous-dependencies */
/* eslint-disable no-console */

const tableStyling = 'style="color: inherit; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Helvetica, Arial, sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\'; font-size: 16px; line-height: 1.5; line-height: 1.5; list-style: disc outside none; margin-bottom: 1.25rem; text-size-adjust: 100%; word-wrap: break-word;"';

const packageDir = (componentName) => {
  const getPath = glob.sync(componentName, { cwd: __dirname + '../../../packages', realpath: true });

  return `${getPath[0]}/src/`;
};

const tableHeaderTemplate = '<thead><tr><th style="width: 10%">Prop Name</th><th style="width: 35%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 35%">Description</th></tr></thead>';

const createTableRow = (propValues) => {
  const rowValues = Object.values(propValues);
  let currentRow = '<tr style="vertical-align: top">';
  let styledRow;
  const styles = {};

  rowValues.forEach((value, index) => {
    styles.color = (value === 'required') ? 'color: #d53700' : '';
    styles.fontWeight = (index === 0 || index === 3) ? 'font-weight: bold' : '';
    styledRow = (styles.color || styles.fontWeight) ? `<td style="${styles.fontWeight || styles.color}">${value}</td>` : `<td>${value}</td>`;
    currentRow += styledRow;
  });
  currentRow += '</tr>';

  return currentRow;
};

const formatPropShape = (propShape) => {
  const [name, value] = propShape;
  const props = {};
  const customType = name === 'customMessages' ? 'custom' : name;
  const specialTypes = ['enum', 'union', 'arrayOf'];

  const propDescription = Object.values(value.description).join('').replace(/\r?\n|\r/g, ' ');
  /* eslint-disable react/jsx-filename-extension */
  let count = 0;
  let description = '';

  [...propDescription].forEach((ch) => {
    if (ch === '`') {
      count += 1;
      if (count % 2 === 0) {
        description += '</code>';
        count = 0;
      } else {
        description += '<code>';
      }
    } else {
      description += ch;
    }
  });

  // Check for special prop types and handle them.
  const typeCheck = specialTypes.indexOf(Object.values(value.type)[0][0]) > -1
    || customType
    ? Object.values(value.type)[0]
    : Object.values(value.type).join('');

  // Check if prop type is an object shape.
  const shapeHandler = value.type.name === 'shape'
    ? `An object shaped like:<br /><pre style="white-space: pre-wrap">${JSON.stringify(value.type.value, null, 1)}</pre>`
    : undefined;

  // Construct props object for use in creating table rows.
  propShape.forEach(() => {
    props.name = name;
    props.type = shapeHandler || typeCheck;
    props.required = value.required === true ? 'required' : 'optional';
    props.defaultValue = value.defaultValue ? Object.values(value.defaultValue)[0] : 'none';
    props.description = description;
  });
  return props;
};

const generateTable = (rowArray) => {
  const generatedTable = `<div style="line-height: 1.5; margin-bottom: 1.25rem;"><table>${tableHeaderTemplate}<tbody>${rowArray.join('')}</tbody></table></div>`;

  return generatedTable;
};

// Generate props table markdown files in each component's docs folder
const generateMarkdownFile = (component, dir, formattedProps) => {
  const fileName = component.slice(0, -4);
  const fileDir = `${path.resolve(dir, '..')}/docs/${fileName}-props-table.md`;

  if (!fs.existsSync(fileDir)) {
    fs.writeFileSync(fileDir, formattedProps);
    console.log(`Generated Props Markdown File for ${fileName} Package.`);
  }
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
const processPackageList = (packageName) => {
  const componentDir = packageDir(packageName);
  glob('*.jsx', { cwd: componentDir }, (err, files) => {
    if (err) console.log(err);
    if (files) {
      files.forEach(file => processFile(componentDir, file));
    }
  });
};

module.exports = (packageJSON) => {
  const packageName = JSON.parse(packageJSON).name;

  if (packageName === 'terra-button') processPackageList(packageName);

  return packageJSON;
};
