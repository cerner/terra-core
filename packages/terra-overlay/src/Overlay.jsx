import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import FocusTrap from 'focus-trap-react';
import { Portal } from 'react-portal';
import KeyCode from 'keycode-js';
import 'mutationobserver-shim';
import './_matches-polyfill';
import styles from './Overlay.module.scss';
import Container from './OverlayContainer';

// Importing WICG Inert polyfill causes Jest to crash
// Issue logged to Jest repo: https://github.com/facebook/jest/issues/8373
// This logic avoids importing the polyfill when running Jest tests
// It also checks to make sure not to load the inert polyfill if it has already been defined
// eslint-disable-next-line no-prototype-builtins
if (process.env.NODE_ENV !== 'test' && !Element.prototype.hasOwnProperty('inert')) {
  // eslint-disable-next-line global-require
  require('wicg-inert');
}

const cx = classNames.bind(styles);

const BackgroundStyles = {
  LIGHT: 'light',
  DARK: 'dark',
  CLEAR: 'clear',
};

const zIndexes = ['100', '6000', '7000', '8000', '9000'];

const propTypes = {
  /**
  * The content to be displayed within the overlay.
  */
  children: PropTypes.node,
  /**
  * Indicates if the overlay is open.
  */
  isOpen: PropTypes.bool,
  /**
  * The visual theme to be applied to the overlay background. Accepts 'light', 'dark', and 'clear'.
  */
  backgroundStyle: PropTypes.oneOf(['light', 'dark', 'clear']),
  /**
  * Indicates if the overlay content is scrollable.
  */
  isScrollable: PropTypes.bool,
  /**
  * Callback triggered on overlay click or ESC key. Setting this enables close behavior.
  */
  onRequestClose: PropTypes.func,
  /**
  * Indicates if the overlay is relative to the triggering container.
  */
  isRelativeToContainer: PropTypes.bool,
  /**
   * Used to select the root mount DOM node. This is used to help prevent focus from shifting outside of the overlay when it is opened in a portal.
   */
  rootSelector: PropTypes.string,
  /**
  * Z-Index layer to apply to the ModalContent and ModalOverlay. Valid values are '100', '6000', '7000', '8000', or '9000'.
  */
  zIndex: PropTypes.oneOf(zIndexes),
};

const defaultProps = {
  children: null,
  isOpen: false,
  backgroundStyle: BackgroundStyles.LIGHT,
  isScrollable: false,
  isRelativeToContainer: false,
  onRequestClose: undefined,
  rootSelector: '#root',
  zIndex: '100',
};

class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.setContainer = this.setContainer.bind(this);
    this.disableContainerChildrenFocus = this.disableContainerChildrenFocus.bind(this);
    this.enableContainerChildrenFocus = this.enableContainerChildrenFocus.bind(this);
    this.shouldHandleESCKeydown = this.shouldHandleESCKeydown.bind(this);
    this.shouldHandleClick = this.shouldHandleClick.bind(this);
    this.resetBeforeOverlay = this.resetBeforeOverlay.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.shouldHandleESCKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.shouldHandleESCKeydown);
    this.resetBeforeOverlay(this.props.rootSelector);
  }

  setContainer(node) {
    if (!node) { return; } // Ref callbacks happen on mount and unmount, element is null on unmount
    this.overflow = document.documentElement.style.overflow;
    if (this.props.isRelativeToContainer) {
      this.container = node.parentNode;
    } else {
      this.container = null;
    }
    this.disableContainerChildrenFocus();
  }

  disableContainerChildrenFocus() {
    if (this.props.isRelativeToContainer) {
      if (this.container && this.container.querySelector('[data-terra-overlay-container-content]')) {
        this.container.querySelector('[data-terra-overlay-container-content]').setAttribute('inert', '');
      }
    } else {
      const selector = this.props.rootSelector;
      if (document.querySelector(selector)) document.querySelector(selector).setAttribute('inert', '');
      document.documentElement.style.overflow = 'hidden';
    }
  }

  enableContainerChildrenFocus() {
    if (this.props.isRelativeToContainer) {
      if (this.container && this.container.querySelector('[data-terra-overlay-container-content]')) {
        this.container.querySelector('[data-terra-overlay-container-content]').removeAttribute('inert');
      }
    } else {
      const selector = this.props.rootSelector;
      if (document.querySelector(selector)) document.querySelector(selector).removeAttribute('inert');
      document.documentElement.style.overflow = this.overflow;
    }
  }

  shouldHandleESCKeydown(event) {
    if (this.props.isOpen && event.keyCode === KeyCode.KEY_ESCAPE) {
      this.handleCloseEvent(event);
      event.preventDefault();
    }
  }

  shouldHandleClick(event) {
    if (this.props.isOpen) {
      this.handleCloseEvent(event);
    }
  }

  handleCloseEvent(event) {
    if (this.props.onRequestClose) {
      this.props.onRequestClose(event);
    }
  }

  resetBeforeOverlay() {
    this.enableContainerChildrenFocus();
  }

  render() {
    const {
      children, isOpen, backgroundStyle, isScrollable, isRelativeToContainer, onRequestClose, rootSelector, zIndex, ...customProps
    } = this.props;
    const type = isRelativeToContainer ? 'container' : 'fullscreen';

    if (!isOpen) {
      this.resetBeforeOverlay();
      return null;
    }

    let zIndexLayer = '100';
    if (zIndexes.indexOf(zIndex) >= 0) {
      zIndexLayer = zIndex;
    }

    const OverlayClassNames = cx([
      'overlay',
      type,
      backgroundStyle,
      { scrollable: isScrollable },
      customProps.className,
      `layer-${zIndexLayer}`,
    ]);

    /*
      tabIndex set to 0 allows screen readers like VoiceOver to read overlay content when its displayed.
      Key events are added on mount.
    */
    /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-tabindex */
    const overlayComponent = (
      <div {...customProps} ref={this.setContainer} onClick={this.shouldHandleClick} className={OverlayClassNames} tabIndex="0">
        <div className={cx('content')}>
          {children}
        </div>
      </div>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-tabindex */

    if (isRelativeToContainer) {
      return overlayComponent;
    }

    const backgroundScrollContent = (
      <div className={cx('background-scroll-content')}>
        <div className={cx('inner')} />
      </div>
    );

    return (
      <Portal>
        {backgroundScrollContent}
        <FocusTrap>
          {/* div addresses child focus change introduced in focus-trap-react v5.0.0 */}
          <div>
            {overlayComponent}
          </div>
        </FocusTrap>
      </Portal>
    );
  }
}

const Opts = { BackgroundStyles, zIndexes };

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
Overlay.Opts = Opts;
Overlay.Container = Container;

export default Overlay;
