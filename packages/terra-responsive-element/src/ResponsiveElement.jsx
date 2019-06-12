import React from 'react';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';
import breakpoints, { activeBreakpointForSize } from 'terra-breakpoints';

const DependentViewport = {
  WINDOW: 'window',
  PARENT: 'parent',
};

const propTypes = {
  /**
   * Child nodes.
   */
  children: PropTypes.node,
  /**
   * A callback function invoked when the breakpoint size changes. onChange(<string>breakpoint)
   */
  onChange: PropTypes.func,
  /**
   * A callback function invoked when the responsive target resizes. onResize(<number>width)
   */
  onResize: PropTypes.func,
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
   * An element to be displayed at enormous breakpoints.
   */
  enormous: PropTypes.element,
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
    const {
      onChange,
      onResize,
      tiny,
      small,
      medium,
      large,
      huge,
      enormous,
    } = this.props;

    if (onResize) {
      onResize(width);
    }

    const activeBreakpoint = activeBreakpointForSize(width);
    if (onChange && activeBreakpoint !== this.breakpoint) {
      onChange(activeBreakpoint);
    }

    this.breakpoint = activeBreakpoint;

    // Only update the state if an uncontrolled component exists.
    if (tiny || small || medium || large || huge || enormous) {
      let element;
      if (width >= breakpoints.enormous && enormous) {
        element = 'enormous';
      } else if (width >= breakpoints.huge && huge) {
        element = 'huge';
      } else if (width >= breakpoints.large && large) {
        element = 'large';
      } else if (width >= breakpoints.medium && medium) {
        element = 'medium';
      } else if (width >= breakpoints.small && small) {
        element = 'small';
      } else {
        element = 'tiny';
      }

      if (this.state.element !== element) {
        this.setState({ element });
      }
    }
  }

  handleWindowResize() {
    this.handleResize(window.innerWidth);
  }

  render() {
    const { children, responsiveTo } = this.props;

    if (this.state.element) {
      return this.props[this.state.element] || null;
    }

    return (
      <React.Fragment>
        {responsiveTo === 'parent' && !this.container && <div ref={this.setContainer} />}
        {children}
      </React.Fragment>
    );
  }
}

ResponsiveElement.propTypes = propTypes;
ResponsiveElement.defaultProps = defaultProps;

export default ResponsiveElement;
export { DependentViewport };
