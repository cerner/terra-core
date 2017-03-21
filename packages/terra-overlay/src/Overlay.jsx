import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Portal from './Portal';
import OverlayManager from './OverlayManager';

import './Overlay.scss';

const ESCAPE = 27;
const overlayManager = new OverlayManager();

const propTypes = {
  /**
   * Whether or not <Overlay/> should be rendered
   */
  isOpen: PropTypes.bool,
  /**
   * Set full screen overlay
   */
  isFullScreen: PropTypes.bool,
  /**
   * DOM element that will be overlaid
   */
  container: PropTypes.object,
  /**
   * Callback function for closing the overlay
   */
  onRequestClose: PropTypes.func,
  /**
   * Allow closing overlay by clicking backdrop
   */
  canClickOutsideClose: PropTypes.bool,
  /**
   * Center the content horizontally and vertically
   */
  centerContent: PropTypes.bool,
  /**
   * Visible overlay content when overlay is open
   */
  children: PropTypes.node,
};

const defaultProps = {
  isOpen: false,
  isFullScreen: true,
  container: document.body,
  centerContent: true,
  canClickOutsideClose: true,
};

class Overlay extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.trapFocus = this.trapFocus.bind(this);
    this.handleEscKeyup = this.handleEscKeyup.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.onOpen();
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isOpen && this.props.isOpen) {
      this.onOpen();
    } else if (prevProps.isOpen && !this.props.isOpen) {
      this.onClose();
    }
  }

  onOpen() {
    overlayManager.add(this, this.props.container);
    this.focus();
    document.addEventListener('focus', this.trapFocus, true);
    document.addEventListener('keyup', this.handleEscKeyup);
  }

  onClose() {
    overlayManager.remove(this, this.props.container);
    document.removeEventListener('focus', this.trapFocus, true);
    document.removeEventListener('keyup', this.handleEscKeyup);
    this.restoreFocus();
  }

  focus() {
    this.focusBeforeOpen = document.activeElement;
    this.overlay.firstElementChild.focus();
  }

  trapFocus() {
    const currentActive = document.activeElement;
    const child = this.overlay.firstElementChild;
    if (child !== currentActive && !child.contains(currentActive)) {
      child.focus();
    }
  }

  restoreFocus() {
    if (this.focusBeforeOpen && this.focusBeforeOpen.focus) {
      this.focusBeforeOpen.focus();
      this.focusBeforeOpen = null;
    }
  }

  handleEscKeyup(e) {
    if (e.keyCode === ESCAPE) {
      this.props.onRequestClose();
    }
  }

  handleClickOutside(e) {
    if (this.props.canClickOutsideClose && e.target === e.currentTarget) {
      this.props.onRequestClose();
    }
  }

  render() {
    const {
      isOpen,
      isFullScreen,
      container,
      onRequestClose,
      canClickOutsideClose,
      centerContent,
      children,
      ...customProps
    } = this.props;
    const overlayClass = classNames(
      'terra-Overlay',
      { 'terra-Overlay--center': centerContent },
      customProps.className,
    );
    const onELementPosition = isFullScreen ? null : {
      position: 'absolute',
      top: container.scrollTop,
      left: container.scrollLeft,
    };
    const overlayStyle = {
      ...onELementPosition,
      ...customProps.style,
    };
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <Portal isOpen={isOpen} target={container}>
        <div
          ref={(overlay) => { this.overlay = overlay; }}
          className={overlayClass}
          onClick={this.handleClickOutside}
          style={overlayStyle}
        >
          <div
            tabIndex={0}
            className="terra-Overlay-content"
          >
            {children}
          </div>
        </div>
      </Portal>
    );
  }
}

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;

export default Overlay;
