import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

/**
 * The <Portal/> component render its children into a div and append the div to <body/>.
 */
const propTypes = {
  /**
   * Whether or not the children of <Portal/> should be rendered
   */
  isOpen: PropTypes.bool,
};

const defaultProps = {
  isOpen: false,
};

class Portal extends React.Component {
  componentDidMount() {
    if (this.props.isOpen) {
      this.renderContent(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isOpen && nextProps.isOpen) {
      this.renderContent(nextProps);
    } else if (this.props.isOpen && !nextProps.isOpen) {
      this.unrenderContent();
    } else if (this.props.isOpen && nextProps.isOpen) {
      this.unrenderContent();
      this.renderContent(nextProps);
    }
  }

  unrenderContent() {
    document.body.removeChild(this.container);
  }

  renderContent(props) {
    this.container = document.createElement('div');
    document.body.appendChild(this.container);
    ReactDOM.render(props.children, this.container);
  }

  render() {
    return null;
  }
}

Portal.propTypes = propTypes;
Portal.defaultProps = defaultProps;

export default Portal;
