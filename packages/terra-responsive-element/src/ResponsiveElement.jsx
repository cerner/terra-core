import React, { PropTypes } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import getBreakpoints from './breakpoints';

const propTypes = {
  /**
   * An element to be displayed at default breakpoints ( Between 0 and tiny )
  */
  defaultElement: PropTypes.element,
  /**
   * An element to be displayed at tiny breakpoints
   */
  tiny: PropTypes.element,
  /**
   * An element to be displayed at small breakpoints
   */
  small: PropTypes.element,
  /**
   * An element to be displayed at medium breakpoints
   */
  medium: PropTypes.element,
  /**
   * An element to be displayed at large breakpoints
   */
  large: PropTypes.element,
  /**
   * An element to be displayed at huge breakpoints
   */
  huge: PropTypes.element,
  /**
   * The viewport the element will be responsive to, one of `window` or `parent`
   */
  responsiveTo: PropTypes.oneOf(['window', 'parent']),
};

const defaultProps = {
  responsiveTo: 'parent',
};

class ResponsiveElement extends React.Component {
  constructor() {
    super();
    this.state = { element: null };
    this.setContainer = this.setContainer.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentDidMount() {
    if (this.container) {
      this.resizeObserver = new ResizeObserver((entries) => { this.handleResize(entries[0].contentRect.width); });
      this.resizeObserver.observe(this.container);
    } else {
      this.handleResize(window.innerWidth);
      window.addEventListener('resize', this.handleWindowResize);
    }
  }

  componentWillUnmount() {
    if (this.container) {
      this.resizeObserver.disconnect(this.container);
      this.container = null;
    } else {
      window.removeEventListener('resize', this.handleWindowResize);
    }
  }

  setContainer(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.container = this.props.responsiveTo === 'parent' ? node.parentNode : null;
  }

  handleResize(width) {
    let element;
    const { tiny, small, medium, large, huge } = getBreakpoints();
    if (width >= huge && this.props.huge) {
      element = this.props.huge;
    } else if (width >= large && this.props.large) {
      element = this.props.large;
    } else if (width >= medium && this.props.medium) {
      element = this.props.medium;
    } else if (width >= small && this.props.small) {
      element = this.props.small;
    } else if (width >= tiny && this.props.tiny) {
      element = this.props.tiny;
    } else {
      element = this.props.defaultElement;
    }

    if (this.state.element !== element) {
      this.setState({ element });
    }
  }

  handleWindowResize() {
    this.handleResize(window.innerWidth);
  }

  render() {
    /* eslint-disable no-unused-vars */
    const { defaultElement, tiny, small, medium, large, huge, responsiveTo, ...customProps } = this.props;

    return (
      <div {...customProps} ref={this.setContainer}>
        {this.state.element}
      </div>
    );
  }
}

ResponsiveElement.propTypes = propTypes;
ResponsiveElement.defaultProps = defaultProps;

export default ResponsiveElement;
