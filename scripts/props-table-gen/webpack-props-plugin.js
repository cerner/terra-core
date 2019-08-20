/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const glob = require('glob');
const marked = require('marked');
const path = require('path');
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

    /* eslint-disable quotes */
    // Concatenation removes markdown file empty spacing
    const tableHeaderTemplate = ``
    + `<thead>`
      + `<tr style="line-height: 1.5">`
        + `<th style="width: 10%">Prop Name</th>`
        + `<th style="width: 25%">Type</th>`
        + `<th style="width: 10%">Is Required</th>`
        + `<th style="width: 10%">Default Value</th>`
        + `<th style="width: 45%">Description</th>`
      + `</tr>`
    + `</thead>`;

    const createTableRow = (propValues) => {
      const rowValues = Object.values(propValues);
      let currentRow = '<tr style="vertical-align: top">';
      let styledRow;
      const styles = {};

      // Apply cell and row specific styles.
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

      // Check for special prop types and handle them.
      const typeCheck = specialTypes.indexOf(Object.values(value.type)[0][0]) > -1
        || customType
        ? Object.values(value.type)[0]
        : Object.values(value.type).join('');

      // Check if prop type is an object shape or arrayOf.
      const shapeHandler = () => {
        let type;
        if (value.type.name === 'shape') {
          type = `An object shaped like:<br /><pre style="white-space: pre-wrap">${JSON.stringify(value.type.value, null, 1)}</pre>`;
        }
        if (value.type.name === 'arrayOf') {
          type = `An array of objects structured like:<br /><pre style="white-space: pre-wrap">${JSON.stringify(value.type.value, null, 1)}</pre>`;
        }
        return type;
      };

      // Suppress marked paragraph wrapping.
      marked.Renderer.prototype.paragraph = text => text;

      // Construct props object for use in creating table rows.
      propShape.forEach(() => {
        props.name = name;
        props.type = shapeHandler() || typeCheck;
        props.required = value.required === true ? 'required' : 'optional';
        props.defaultValue = value.defaultValue ? Object.values(value.defaultValue)[0] : 'none';
        props.description = marked(value.description);
      });

      // Add text wrapping to description code blocks.
      let styledDescription;
      if (props.description.includes('<code>')) {
        styledDescription = props.description.replace('<code>', '<code style="white-space: pre-wrap">');
        props.description = styledDescription;
      }

      return props;
    };

    const generateTable = (component, rowArray) => {
      // Separates multi-word component names for prop table titles
      const formatName = packageName(component).replace(/([A-Z])/g, ' $1').trim();

      const generatedTable = ``
      + `<div>`
        + `<h2>${formatName} Props</h2>`
        + `<table style="display: table">${tableHeaderTemplate}`
          + `<tbody>${rowArray.join('')}</tbody>`
        + `</table>`
      + `</div>`;

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

      // Push completely formatted table rows to an array, skipping private props.
      propsArray.forEach((propSet) => {
        if (propSet[1].description.includes('@private')) return;
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
/* eslint-enable class-methods-use-this, no-console, enable-quotes */
module.exports = WebpackPropsPlugin;
