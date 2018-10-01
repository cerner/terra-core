import React from 'react';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';
import 'terra-base/lib/baseStyles';
import breakpoints from './breakpoints.module.scss';

const DependentViewport = {
  WINDOW: 'window',
  PARENT: 'parent',
};

/* Disabled for the defaultElement which is used implicitly */
/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  /**
   * An element to be displayed at default breakpoints. ( Between 0 and tiny )
  */
  defaultElement: PropTypes.element,
  /**
   * An element to be displayed at tiny breakpoints.
   */
  tiny: PropTypes.element,
  /**
   * An element to be displayed at small breakpoints.
   */
  small: PropTypes.element,
  /**
   * An element to be displayed at medium breakpoints.
   */
  medium: PropTypes.element,
  /**
   * An element to be displayed at large breakpoints.
   */
  large: PropTypes.element,
  /**
   * An element to be displayed at huge breakpoints.
   */
  huge: PropTypes.element,
  /**
   * The viewport the element will be responsive to. One of `window` or `parent`.
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
    this.animationFrameID = null;
  }

  componentDidMount() {
    if (this.container) {
      this.resizeObserver = new ResizeObserver((entries) => {
        this.animationFrameID = window.requestAnimationFrame(() => {
          this.animationFrameID = null;
          this.handleResize(entries[0].contentRect.width);
        });
      });
      this.resizeObserver.observe(this.container);
    } else {
      this.handleResize(window.innerWidth);
      window.addEventListener('resize', this.handleWindowResize);
    }
  }

  componentWillUnmount() {
    if (this.container) {
      window.cancelAnimationFrame(this.animationFrameID);
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
    const {
      tiny, small, medium, large, huge,
    } = breakpoints;
    if (width >= huge && this.props.huge) {
      element = 'huge';
    } else if (width >= large && this.props.large) {
      element = 'large';
    } else if (width >= medium && this.props.medium) {
      element = 'medium';
    } else if (width >= small && this.props.small) {
      element = 'small';
    } else if (width >= tiny && this.props.tiny) {
      element = 'tiny';
    } else {
      element = 'defaultElement';
    }

    if (this.state.element !== element) {
      this.setState({ element });
    }
  }

  handleWindowResize() {
    this.handleResize(window.innerWidth);
  }

  render() {
    if (this.state.element) {
      return this.props[this.state.element] || null;
    }

    return <div ref={this.setContainer} />;
  }
}

ResponsiveElement.propTypes = propTypes;
ResponsiveElement.defaultProps = defaultProps;

export default ResponsiveElement;
export { DependentViewport };
