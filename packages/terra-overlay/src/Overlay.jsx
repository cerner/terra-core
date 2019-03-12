import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import FocusTrap from 'focus-trap-react';
import { Portal } from 'react-portal';
import KeyCode from 'keycode-js';
import 'terra-base/lib/baseStyles';
import styles from './Overlay.module.scss';
import Container from './OverlayContainer';

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
   * Allows assigning of root element custom data attribute for easy selecting.
   */
  rootSelector: PropTypes.string,
  /**
  * Z-Index layer to apply to the ModalContent and ModalOverlay. Valid values are '100', '6000', '7000', '8000', or '9000'.
  */
  zIndex: PropTypes.oneOf(zIndexes),
};

let overlayClassName = '';

const defaultProps = {
  children: null,
  isOpen: false,
  backgroundStyle: BackgroundStyles.LIGHT,
  isScrollable: false,
  isRelativeToContainer: false,
  onRequestClose: undefined,
  rootSelector: '[data-terra-base]',
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
    const selector = this.props.rootSelector;
    if (this.props.isRelativeToContainer) {
      this.container = node.parentNode;
      this.containerChildren = this.container.children;
      this.disableContainerChildrenFocus();
    } else {
      document.documentElement.style.overflow = 'hidden';
      this.container = null;
      if (document.querySelector(selector)) document.querySelector(selector).setAttribute('aria-hidden', 'true'); // prevent screen reader from moving to hidden content
    }
  }

  disableContainerChildrenFocus() {
    if (this.containerChildren) {
      const prevTabIndex = [];
      for (let i = 0; i < this.containerChildren.length; i += 1) {
        prevTabIndex.push(this.containerChildren[i].tabIndex);
        this.containerChildren[i].tabIndex = -1;
        // childern with calss name Overlay is the overlay component and it's content which should not be disabled for screen readers.
        if (this.containerChildren[i].className !== overlayClassName) {
          this.containerChildren[i].setAttribute('aria-hidden', 'true'); // prevent screen reader from moving to content behind the overlay
        }
      }
      this.containerChildrenPrevTabIndex = prevTabIndex;
    }
  }

  enableContainerChildrenFocus() {
    if (this.containerChildren) {
      for (let i = 0; i < this.containerChildren.length; i += 1) {
        this.containerChildren[i].tabIndex = this.containerChildrenPrevTabIndex[i];
        if (this.containerChildren[i].className !== overlayClassName) {
          this.containerChildren[i].setAttribute('aria-hidden', 'false'); // Enables content on close of overlay
        }
      }
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

  resetBeforeOverlay(selector) {
    document.documentElement.style.overflow = this.overflow;
    if (document.querySelector(selector)) {
      document.querySelector(selector).setAttribute('aria-hidden', 'false');
    }
    if (this.props.isRelativeToContainer) {
      this.enableContainerChildrenFocus();
    }
  }

  render() {
    const {
      children, isOpen, backgroundStyle, isScrollable, isRelativeToContainer, onRequestClose, rootSelector, zIndex, ...customProps
    } = this.props;
    const type = isRelativeToContainer ? 'container' : 'fullscreen';

    if (!isOpen) {
      this.resetBeforeOverlay(rootSelector);
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
    overlayClassName = OverlayClassNames;
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
          {overlayComponent}
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
