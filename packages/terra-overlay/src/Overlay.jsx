import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import FocusTrap from 'focus-trap-react';
import 'terra-base/lib/baseStyles';
import styles from './Overlay.scss';

const cx = classNames.bind(styles);

const BackgroundStyles = {
  LIGHT: 'light',
  DARK: 'dark',
  CLEAR: 'clear',
};

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
  * The visual theme to be applied to the overlay background. Accepts 'light', 'dark', and 'clear' or BackgroundStyles.LIGHT, BackgroundStyles.DARK, and BackgroundStyles.CLEAR.
  */
  backgroundStyle: PropTypes.oneOf(['light', 'dark', 'clear', BackgroundStyles]),
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
};

const KEYCODES = {
  ESCAPE: 27,
};

const defaultProps = {
  children: null,
  isOpen: false,
  backgroundStyle: BackgroundStyles.LIGHT,
  isScrollable: false,
  isRelativeToContainer: false,
  onRequestClose: undefined,
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
  }

  setContainer(node) {
    if (!node) { return; } // Ref callbacks happen on mount and unmount, element is null on unmount
    this.overflow = document.documentElement.style.overflow;

    if (this.props.isRelativeToContainer) {
      this.container = node.parentNode;
      this.containerChildren = this.container.children;
      this.disableContainerChildrenFocus();
    } else {
      document.documentElement.style.overflow = 'hidden';
      this.container = null;
    }
  }

  disableContainerChildrenFocus() {
    if (this.containerChildren) {
      const prevTabIndex = [];
      for (let i = 0; i < this.containerChildren.length; i += 1) {
        prevTabIndex.push(this.containerChildren[i].tabIndex);
        this.containerChildren[i].tabIndex = -1;
      }
      this.containerChildrenPrevTabIndex = prevTabIndex;
    }
  }

  enableContainerChildrenFocus() {
    if (this.containerChildren) {
      for (let i = 0; i < this.containerChildren.length; i += 1) {
        this.containerChildren[i].tabIndex = this.containerChildrenPrevTabIndex[i];
      }
    }
  }

  shouldHandleESCKeydown(event) {
    if (this.props.isOpen && event.keyCode === KEYCODES.ESCAPE) {
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
    document.documentElement.style.overflow = this.overflow;
    if (this.props.isRelativeToContainer) {
      this.enableContainerChildrenFocus();
    }
  }

  render() {
    const { children, isOpen, backgroundStyle, isScrollable, isRelativeToContainer, onRequestClose, ...customProps } = this.props;
    const type = isRelativeToContainer ? 'container' : 'fullscreen';

    if (!isOpen) {
      this.resetBeforeOverlay();
      return null;
    }

    const OverlayClassNames = cx([
      'overlay',
      type,
      backgroundStyle,
      { scrollable: isScrollable },
      customProps.className,
    ]);

    // Disable linter to pass onClick to div element.
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    const overlayComponent = (
      <div {...customProps} ref={this.setContainer} onClick={this.shouldHandleClick} className={OverlayClassNames} tabIndex="0" >
        <div className={cx('content')}>
          {children}
        </div>
      </div>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */

    if (isRelativeToContainer) {
      return overlayComponent;
    }

    return (
      <FocusTrap>
        {overlayComponent}
      </FocusTrap>
    );
  }
}

const Opts = { BackgroundStyles };

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
Overlay.Opts = Opts;

export default Overlay;
