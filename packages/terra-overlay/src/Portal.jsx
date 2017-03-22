import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

/**
 * The <Portal/> component render its children into a div and append the div to a target DOM node.
 */
const propTypes = {
  /**
   * Whether or not the children of <Portal/> should be rendered
   */
  isOpen: PropTypes.bool,
  /**
   * DOM element that will be appended with the new child by portal
   */
  target: PropTypes.object,
};

const defaultProps = {
  isOpen: false,
  target: document.body,
};

class Portal extends React.Component {
  componentDidMount() {
    if (this.props.isOpen) {
      this.renderContent(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen) {
      this.renderContent(nextProps);
    } else if (this.props.isOpen && !nextProps.isOpen) {
      this.unrenderContent();
    }
  }

  unrenderContent() {
    ReactDOM.unmountComponentAtNode(this.container);
    this.props.target.removeChild(this.container);
    this.container = null;
  }

  renderContent(props) {
    if (!this.container) {
      this.container = document.createElement('div');
      props.target.appendChild(this.container);
    }
    ReactDOM.unstable_renderSubtreeIntoContainer(this, props.children, this.container);
  }

  render() {
    return null;
  }
}

Portal.propTypes = propTypes;
Portal.defaultProps = defaultProps;

export default Portal;
