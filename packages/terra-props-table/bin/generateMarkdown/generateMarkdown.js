const generateProps = require('./generateProps');

const generateMarkdown = (name, componentMetadata) => {
  if (componentMetadata.props) {
    const markdownString = `## ${name} Props Table\n${generateProps(componentMetadata.props)}`;
    return markdownString;
  }
  throw new Error('componentMetadata does not contain props');
};

module.exports = generateMarkdown;
