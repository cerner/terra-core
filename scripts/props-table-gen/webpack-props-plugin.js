const path = require('path');
const fs = require('fs');
/* eslint-disable import/no-extraneous-dependencies */
const glob = require('glob');
const reactDocs = require('react-docgen');
/* eslint-enable import/no-extraneous-dependencies */

/* eslint-disable class-methods-use-this, no-console */
class WebpackPropsPlugin {
  apply() {
    const packageName = (component) => {
      let filteredName;

      // Filters extended path or underscored component names
      if (component.indexOf('/') > -1 && component.indexOf('_') > -1) {
        filteredName = component.substring(component.lastIndexOf('/') + 2, component.length - 4);
      } else if (component.indexOf('/') > -1) {
        filteredName = component.substring(component.lastIndexOf('/') + 1, component.length - 4);
      } else if (component.indexOf('_') > -1) {
        filteredName = component.slice(1, -4);
      } else {
        filteredName = component.slice(0, -4);
      }

      return filteredName;
    };

    const tableHeaderTemplate = '<thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 35%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 35%">Description</th></tr></thead>';

    const createTableRow = (propValues) => {
      const rowValues = Object.values(propValues);
      let currentRow = '<tr style="vertical-align: top">';
      let styledRow;
      const styles = {};

      rowValues.forEach((value, index) => {
        styles.color = (value === 'required')
          ? 'color: #d53700'
          : '';
        styles.fontWeight = (index === 0 || index === 3)
          ? 'font-weight: bold'
          : '';
        styledRow = (styles.color || styles.fontWeight)
          ? `<td style="${styles.fontWeight || styles.color}; padding-bottom: 1.8rem">${value}</td>`
          : `<td style="padding-bottom: 1.8rem">${value}</td>`;
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

      // Create markdown compatible description
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

    const generateTable = (component, rowArray) => {
      // Separates multi-word component names for prop table titles
      const formatName = packageName(component).replace(/([A-Z])/g, ' $1').trim();

      const generatedTable = `<div>\
      <h2>${formatName} Props</h2>\
      <table style="display: table">${tableHeaderTemplate}<tbody>${rowArray.join('')}</tbody></table>\
      </div>`;

      return generatedTable;
    };

    // Generate props table markdown files in each component's docs folder
    const generateMarkdownFile = (component, formattedProps) => {
      // Creates separate name based on path, e.g. 'terra-action-header'.
      const componentName = component.slice(0, component.indexOf('/'));

      const fileName = packageName(component);
      const fileDir = `${path.resolve(__dirname, '../../packages', componentName)}/docs/${fileName}-props-table.md`;

      fs.writeFileSync(fileDir, formattedProps);
    };

    const generateMarkdown = (component, propTable) => {
      const formattedMarkdownRows = [];
      const propsArray = Object.entries(propTable);

      // Push completely formatted table rows to an array.
      propsArray.forEach((propSet) => {
        if (propSet.indexOf('intl') > -1) return;
        formattedMarkdownRows.push(createTableRow(formatPropShape(propSet)));
      });

      // Generate complete props table
      const completeTable = generateTable(component, formattedMarkdownRows);

      return generateMarkdownFile(component, completeTable);
    };

    const processFile = (component) => {
      const componentDir = path.resolve(__dirname, '../../packages/', component);
      const currentFile = fs.readFileSync(componentDir, 'utf-8');

      // Check if imported file has a propTypes object.
      const propsCheck = JSON.stringify(currentFile);
      if (!propsCheck.includes('propTypes')) return;

      // Use react-docgen to extract props from the current component.
      const parsedProps = reactDocs.parse(currentFile);

      generateMarkdown(component, parsedProps.props);
    };

    // Uses fs and glob to traverse the directory tree looking for .jsx files.
    const processPackageList = () => {
      glob('**/*.jsx', { cwd: 'packages', ignore: ['**/terra-dev-site/**', '**/common/**', '**/tests/**'] }, (err, files) => {
        if (err) console.log(err);
        if (files) {
          files.forEach((file, index) => {
            if (index === files.length - 1) {
              processFile(file);
              console.log('Generation of Props Table Markdown Files Complete.');
            } else {
              processFile(file);
            }
          });
        }
      });
    };

    const generatePropsTables = () => {
      console.log('Generating Markdown Files for Props Tables.');
      processPackageList();
    };

    generatePropsTables();
  }
}

module.exports = WebpackPropsPlugin;
