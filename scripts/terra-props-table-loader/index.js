/* eslint-disable import/no-extraneous-dependencies */
const marked = require('marked');
const reactDocs = require('react-docgen');
/* eslint-disable class-methods-use-this, no-console */

module.exports = (source) => {
  const generatePropsTables = (sourceComponent) => {
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

    const generateTable = (rowArray) => {
      const generatedTable = ``
        + `<table style="display: table; margin-bottom: 1.25rem">${tableHeaderTemplate}`
          + `<tbody>${rowArray.join('')}</tbody>`
        + `</table>`;

      return generatedTable;
    };

    const generateMarkdown = (props) => {
      const formattedMarkdownRows = [];
      const propsArray = Object.entries(props);
      // Push completely formatted table rows to an array, skipping private props.
      propsArray.forEach((propSet) => {
        if (propSet[1].description.includes('@private')) return;
        formattedMarkdownRows.push(createTableRow(formatPropShape(propSet)));
      });
      // Generate complete props table
      const completeTable = generateTable(formattedMarkdownRows);

      return JSON.stringify(completeTable);
    };
    const parsedProps = reactDocs.parse(sourceComponent);

    return generateMarkdown(parsedProps.props);
  };
  return `module.exports = ${generatePropsTables(source)}`;
};
/* eslint-enable class-methods-use-this, no-console, quotes */
