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
  * The visual theme to be applied to the overlay background. Accepts 'light', 'dark', and 'clear'.
  */
  backgroundStyle: PropTypes.oneOf(['light', 'dark', 'clear']),
  /**
  * Incidates if the overlay content is scrollable
  */
  isScrollable: PropTypes.bool,
  /**
  * Callback triggered on overlay click or ESC key
  */
  onRequestClose: PropTypes.func,
  /**
  * Indicates if the overlay is relative to the triggering container
  */
  isRelativeToContainer: PropTypes.bool,
};

const KEYCODES = {
  ESCAPE: 27,
};

const defaultProps = {
  children: null,
  isOpen: false,
  backgroundStyle: 'light',
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
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.shouldHandleESCKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.shouldHandleESCKeydown);
    this.children = null;
    this.container = null;
  }

  setContainer(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element is null on unmount
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

  reset() {
    document.documentElement.style.overflow = this.overflow;
    if (this.props.isRelativeToContainer) {
      this.enableContainerChildrenFocus();
    }
  }

  render() {
    const { children, isOpen, backgroundStyle, isScrollable, isRelativeToContainer, onRequestClose, ...customProps } = this.props;
    const type = isRelativeToContainer ? 'container' : 'fullscreen';

    if (!isOpen) {
      this.reset();
      return null;
    }

    const attributes = Object.assign({}, customProps);
    const OverlayClassNames = classNames([
      'terra-Overlay',
      { [`terra-Overlay--${type}`]: type },
      { [`terra-Overlay--${backgroundStyle}`]: backgroundStyle },
      { 'terra-Overlay--scrollable': isScrollable },
      attributes.className,
    ]);

    // Disable linter to pass onClick to div element.
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    const overlayComponent = (
      <div ref={this.setContainer} onClick={this.shouldHandleClick} className={OverlayClassNames} tabIndex="0" {...customProps}>
        <div className="terra-Overlay-content">
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

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;

export default Overlay;
