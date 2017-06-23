import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AnimateHeight from 'react-animate-height';
import 'terra-base/lib/baseStyles';
import './Toggler.scss';

const propTypes = {
  /**
   * Content in the body of the toggler component that will be expanded or collapsed
   */
  children: PropTypes.node.isRequired,
  /**
   * When set, will animate the toggler component as it is expanded or collapsed
   */
  isAnimated: PropTypes.bool,
  /**
   * Used to expand or collapse toggler content
   */
  isOpen: PropTypes.bool,
};

const defaultProps = {
  children: null,
  isAnimated: false,
  isOpen: false,
};

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnAnimationEnd = this.handleOnAnimationEnd.bind(this);
    this.handleOnAnimationStart = this.handleOnAnimationStart.bind(this);
    this.animationDuration = 250;
  }

  componentDidMount() {
    // If toggler is closed when the component mounts, set props on all the focusable elements
    // within the toggler to disable users from focusing to them
    if (!this.props.isOpen) {
      if (this.contentContainer) {
        this.contentContainer.classList.add('is-closed');
      }
    }
  }

  handleOnAnimationEnd(open) {
    // If toggler is closed and the close animation has ended, set props on all the focusable elements
    // within the toggler to disable users from focusing to them
    if (!open) {
      if (this.contentContainer) {
        setTimeout(() => this.contentContainer.classList.add('is-closed'), this.animationDuration);
      }
    }
  }

  handleOnAnimationStart(open) {
    // If toggler is opened and the open animation has started, remove props on all the focusable elements
    // within the toggler that disable users from focusing to them
    if (open) {
      if (this.contentContainer) {
        this.contentContainer.classList.remove('is-closed');
      }
    }
  }

  render() {
    const { isAnimated, isOpen, children, ...customProps } = this.props;
    const attributes = Object.assign({}, customProps);
    const TogglerClassNames = classNames([
      'terra-Toggler',
      { 'is-animated': isAnimated },
      attributes.className,
    ]);
    const height = isOpen ? 'auto' : '0';
    let body;

    if (isAnimated) {
      body = (
        <AnimateHeight
          duration={this.animationDuration}
          height={height}
          onAnimationEnd={this.handleOnAnimationEnd(isOpen)}
          onAnimationStart={this.handleOnAnimationStart(isOpen)}
        >
          {children}
        </AnimateHeight>
      );
    } else {
      body = (
        isOpen && children
      );
    }

    return (
      <div
        {...attributes}
        className={TogglerClassNames}
        aria-hidden={!isOpen}
        ref={(div) => { this.contentContainer = div; }}
      >
        {body}
      </div>
    );
  }
}

Toggler.propTypes = propTypes;
Toggler.defaultProps = defaultProps;

export default Toggler;
