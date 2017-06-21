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
    this.collectFocusElements = this.collectFocusElements.bind(this);
  }

  // Gathers all the focusable elements which need attributes set on them to disable/enable focus
  collectFocusElements() {
    if (this.contentContainer) {
      const inertLinks = this.contentContainer.getElementsByTagName('a');
      const inertButtons = this.contentContainer.getElementsByTagName('button');
      const inertInputs = this.contentContainer.getElementsByTagName('input');
      const inertSelects = this.contentContainer.getElementsByTagName('select');
      const inertTextareas = this.contentContainer.getElementsByTagName('textarea');
      const inertFormElements = [...inertButtons, ...inertInputs, ...inertSelects, ...inertTextareas];
      const inertElements = {
        links: inertLinks,
        formElements: inertFormElements,
      };

      return inertElements;
    }

    return null;
  }

  handleOnAnimationEnd(open) {
    // If toggler is closed and the close animation has ended, set props on all the focusable elements
    // within the toggler to disable users from focusing to them
    if (!open && this.collectFocusElements() !== null) {
      if (this.contentContainer) {
        // Make links inert
        let l = 0;
        while (l < this.collectFocusElements().links.length) {
          this.collectFocusElements().links[l].setAttribute('tabindex', '-1');
          l += 1;
        }

        // Make form elements inert
        let f = 0;
        while (f < this.collectFocusElements().formElements.length) {
          this.collectFocusElements().formElements[f].setAttribute('disabled', '');
          f += 1;
        }
      }
    }
  }

  handleOnAnimationStart(open) {
    // If toggler is opened and the open animation has started, remove props on all the focusable elements
    // within the toggler that disable users from focusing to them
    if (open && this.collectFocusElements() !== null) {
      if (this.contentContainer) {
        // Make links focusable
        let l = 0;
        while (l < this.collectFocusElements().links.length) {
          this.collectFocusElements().links[l].removeAttribute('tabindex');
          l += 1;
        }

        // Make form elements focusable
        let f = 0;
        while (f < this.collectFocusElements().formElements.length) {
          this.collectFocusElements().formElements[f].removeAttribute('disabled');
          f += 1;
        }
      }
    }
  }

  render() {
    const { isAnimated, isOpen, children, ...customProps } = this.props;
    const attributes = Object.assign({}, customProps);
    const TogglerClassNames = classNames([
      'terra-Toggler',
      attributes.className,
    ]);
    const height = isOpen ? 'auto' : '0';
    let body;

    if (isAnimated) {
      body = (
        <div ref={(div) => { this.contentContainer = div; }}>
          <AnimateHeight
            duration={250}
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
        className={TogglerClassNames}
        aria-hidden={!isOpen}
        ref={(div) => { this.toggleDiv = div; }}
      >
        {body}
      </div>
    );
  }
}

Toggler.propTypes = propTypes;
Toggler.defaultProps = defaultProps;

export default Toggler;
