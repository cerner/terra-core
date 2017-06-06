import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';
import 'terra-base/lib/baseStyles';
import './Overlay.scss';

const propTypes = {
  /**
  * The content to be displayed.
  */
  children: PropTypes.node,
  /**
  * Incidates if the overlay is open
  */
  isOpen: PropTypes.bool,
  /**
  * Incidates if the overlay content is scrollable
  */
  isScrollable: PropTypes.bool,
  /**
  * Indicates if the overlay is relative to the triggering container
  */
  isRelativeToContainer: PropTypes.bool,
  /**
  * Indicates if the background scrolling is enables
  */
  isFixed: PropTypes.bool,
  /**
  * Callback triggered on overlay click or ESC key
  */
  onRequestClose: PropTypes.func,
  /**
  * Indicates f the focus is not trapped to overlay content when overlay is relative to container
  */
  isNotTrappedFocus: PropTypes.bool,
};

const KEYCODES = {
  ESCAPE: 27,
};

const defaultProps = {
  children: null,
  isOpen: false,
  isScrollable: false,
  isRelativeToContainer: false,
  isFixed: false,
  onRequestClose: undefined,
  isNotTrappedFocus: false,
};

class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.setContainer = this.setContainer.bind(this);
    this.handleESCKeydown = this.handleESCKeydown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetBackground = this.resetBackground.bind(this);
  }

  componentWillUnmount() {
    this.container = null;
  }

  setContainer(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element is null on unmount
    this.overflow = document.documentElement.style.overflow;
    if (this.props.isFixed || !this.props.isRelativeToContainer) {
      document.documentElement.style.overflow = 'hidden';
    }
    this.container = this.props.isRelativeToContainer ? node.parentNode : null;
  }

  handleESCKeydown(event) {
    if (this.props.isOpen && event.keyCode === KEYCODES.ESCAPE) {
      this.handleCloseEvent(event);
    }
  }

  handleClick(event) {
    if (this.props.isOpen) {
      if (this.props.isRelativeToContainer && this.container.contains(event.target)) {
        this.handleCloseEvent(event);
      } else if (!this.props.isRelativeToContainer) {
        this.handleCloseEvent(event);
      }
    }
  }

  handleCloseEvent(event) {
    if (this.props.onRequestClose) {
      this.props.onRequestClose(event);
    }
  }

  resetBackground() {
    document.documentElement.style.overflow = this.overflow;
  }

  render() {
    const { children, isOpen, isScrollable, isRelativeToContainer, isFixed, isNotTrappedFocus, ...customProps } = this.props;
    const type = isRelativeToContainer ? 'container' : 'fullscreen';
    if (!isOpen) {
      this.resetBackground();
      return null;
    }

    const attributes = Object.assign({}, customProps);
    const OverlayClassNames = classNames([
      'terra-Overlay',
      { [`terra-Overlay--${type}`]: type },
      { 'terra-Overlay--scrollable': isScrollable },
      attributes.className,
    ]);

    const overlayComponent = (
      <div ref={this.setContainer} onKeyDown={this.handleESCKeydown} onClick={this.handleClick} role="presentation" className={OverlayClassNames} tabIndex="0">
        <div className="terra-Overlay-content">
          {children}
        </div>
      </div>
    );

    if (isNotTrappedFocus) {
      return (
        overlayComponent
      );
    }

    return (
      <FocusTrap>
        {overlayComponent}
      </FocusTrap>
    );
  }
}

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;

export default Overlay;
