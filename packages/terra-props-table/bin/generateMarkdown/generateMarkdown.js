const generateProps = require('./generateProps');

const generateMarkdown = (componentMetadata) => {
  if (componentMetadata.props) {
    const markdownString = generateProps(componentMetadata.props);
    return markdownString;
  }
  throw new Error('componentMetadata does not contain props');
};

module.exports = generateMarkdown;
