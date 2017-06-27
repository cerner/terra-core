import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AnimateHeight from 'react-animate-height';
import 'terra-base/lib/baseStyles';
import './Toggle.scss';

const propTypes = {
  /**
   * Content in the body of the toggle component that will be expanded or collapsed
   */
  children: PropTypes.node.isRequired,
  /**
   * When set, will animate the toggle component as it is expanded or collapsed
   */
  isAnimated: PropTypes.bool,
  /**
   * Used to expand or collapse toggle content
   */
  isOpen: PropTypes.bool,
};

const defaultProps = {
  children: null,
  isAnimated: false,
  isOpen: false,
};

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnAnimationEnd = this.handleOnAnimationEnd.bind(this);
    this.handleOnAnimationStart = this.handleOnAnimationStart.bind(this);
    this.animationDuration = 250;
  }

  componentDidMount() {
    // If toggle is closed when the component mounts, set props on all the focusable elements
    // within the toggle to disable users from focusing to them
    if (!this.props.isOpen) {
      if (this.contentContainer) {
        this.contentContainer.classList.add('is-closed');
      }
    }
  }

  handleOnAnimationEnd(open) {
    // If toggle is closed and the close animation has ended, set props on all the focusable elements
    // within the toggle to disable users from focusing to them
    if (!open) {
      if (this.contentContainer) {
        setTimeout(() => this.contentContainer.classList.add('is-closed'), this.animationDuration);
      }
    }
  }

  handleOnAnimationStart(open) {
    // If toggle is opened and the open animation has started, remove props on all the focusable elements
    // within the toggle that disable users from focusing to them
    if (open) {
      if (this.contentContainer) {
        this.contentContainer.classList.remove('is-closed');
      }
    }
  }

  render() {
    const { isAnimated, isOpen, children, ...customProps } = this.props;
    const attributes = Object.assign({}, customProps);
    const ToggleClassNames = classNames([
      'terra-Toggle',
      { 'is-animated': isAnimated },
      attributes.className,
    ]);
    const height = isOpen ? 'auto' : '0';
    let body;

    if (isAnimated) {
      body = (
        <div className="terra-Toggle-content" ref={(div) => { this.contentContainer = div; }}>
          <AnimateHeight
            duration={this.animationDuration}
            height={height}
            onAnimationEnd={this.handleOnAnimationEnd(isOpen)}
            onAnimationStart={this.handleOnAnimationStart(isOpen)}
          >
            {children}
          </AnimateHeight>
        </div>
      );
    } else {
      body = (
        isOpen && children
      );
    }

    return (
      <div
        {...attributes}
        className={ToggleClassNames}
        aria-hidden={!isOpen}
      >
        {body}
      </div>
    );
  }
}

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;
