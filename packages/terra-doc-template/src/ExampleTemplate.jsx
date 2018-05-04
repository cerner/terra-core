import React from 'react';
import PropTypes from 'prop-types';
import ToggleButton from 'terra-toggle-button';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { okaidia } from 'react-syntax-highlighter/styles/prism';

const propTypes = {
  /**
   * The component that serves as an example to be displayed
   */
  example: PropTypes.element,
  /**
   * The source code for the example displayed
   */
  exampleSrc: PropTypes.string,
  /**
   * The title of the example
   */
  title: PropTypes.string,
  /**
   * An optional description that will be displayed below the title as regular text
   */
  description: PropTypes.string,
  /**
   * The children components for this example which will be displayed below the example
   */
  children: PropTypes.element,
};

const defaultProps = {
  example: null,
  exampleSrc: null,
  title: null,
  description: null,
  children: null,
};

class IndexExampleTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { panelIsOpen: false };
    this.handlePanelToggle = this.handlePanelToggle.bind(this);
  }

  handlePanelToggle() {
    this.setState({ panelIsOpen: !this.state.panelIsOpen });
  }

  render() {
    const { title, example, exampleSrc, children, description, ...customProps } = this.props;

    const indexExampleSrc = (
      <ToggleButton isAnimated closedButtonText="View Source Code" data-terra-source-code-toggle>
        <SyntaxHighlighter language="javascript" style={okaidia}>{exampleSrc}</SyntaxHighlighter>
      </ToggleButton>
    );

    return (
      <div {...customProps}>
        <h2>{title}</h2>
        {description}
        {example}
        {indexExampleSrc}
        {children}
      </div>
    );
  }
}

IndexExampleTemplate.propTypes = propTypes;
IndexExampleTemplate.defaultProps = defaultProps;

export default IndexExampleTemplate;
