import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import onClickOutside from 'react-onclickoutside';
import ContentContainer from 'terra-content-container';
import IconClose from 'terra-icon/lib/icon/IconClose';
import './Popup.scss';

/**
 * Directional classes to be applied by a presenting component.
 */
const POPUP_CLASSES = {
  top: 'terra-Popup--arrowTop',
  bottom: 'terra-Popup--arrowBottom',
  left: 'terra-Popup--arrowLeft',
  right: 'terra-Popup--arrowRight',
};

/**
 * Mirrored directional classes, used to flip the arrow on repositioning.
 */
const POPUP_OPPOSITE_CLASSES = {
  top: 'terra-Popup--arrowBottom',
  bottom: 'terra-Popup--arrowTop',
  left: 'terra-Popup--arrowRight',
  right: 'terra-Popup--arrowLeft',
};

/**
 * Key code value for the escape key.
 */
const KEYCODES = {
  ESCAPE: 27,
};

const ARROW_POSITIONS = [
  'top',
  'bottom',
  'left',
  'right',
];

const POPUP_MARGIN = 9;

const propTypes = {
  /**
   * The arrow to be placed within the popup frame.
   */
  arrow: PropTypes.element,
  /**
   * The initial arrow position.
   */
  arrowPosition: PropTypes.oneOf(ARROW_POSITIONS),
  /**
   * The children to be presented as the popup's content.
   */
  children: PropTypes.node.isRequired,
  /**
   * CSS classnames that are append to the popup content body.
   */
  classNameContent: PropTypes.string,
  /**
   * Whether or not the using the escape key should trigger the onRequestClose callback.
   */
  closeOnEsc: PropTypes.bool,
  /**
   * Whether or not clicking outside the popup should trigger the onRequestClose callback.
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * Whether or not resizing the screen should trigger the onRequestClose callback.
   */
  closeOnResize: PropTypes.bool,
  /**
   * A the px value of height to be applied to the content container.
   */
  contentHeight: PropTypes.number.isRequired,
  /**
   * The maximum height to set for popup content in px, also used with responsive behavior for actual height.
   */
  contentHeightMax: PropTypes.number,
  /**
   * A the px value of width to be applied to the content container.
   */
  contentWidth: PropTypes.number.isRequired,
  /**
   * The maximum width of the popup content in px, also used with responsive behavior for actual width.
   */
  contentWidthMax: PropTypes.number,
  /**
   * Should the default behavior, that inserts a header when constraints are breached, be disabled.
   */
  isHeaderDisabled: PropTypes.bool,
  /**
   * The function that should be triggered when a close is indicated.
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * The function returning the frame html reference.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  arrowPosition: 'top',
  classNameContent: null,
  closeOnEsc: false,
  closeOnOutsideClick: false,
  closeOnResize: false,
  contentHeightMax: -1,
  contentWidthMax: -1,
  isHeaderDisabled: false,
};

class Popup extends React.Component {
  static getContentStyle(height, maxHeight, width, maxWidth) {
    const validHeight = maxHeight <= 0 || height <= maxHeight ? height : maxHeight;
    const validWidth = maxWidth <= 0 || width <= maxWidth ? width : maxWidth;
    return { height: `${validHeight.toString()}px`, width: `${validWidth.toString()}px` };
  }

  static addPopupHeader(children, onRequestClose) {
    const icon = <IconClose className="terra-Popup-closeButton" onClick={onRequestClose} height="30" width="30" style={{ float: 'right' }} />;
    const header = <div className="terra-Popup-header">{icon}</div>;
    return <ContentContainer header={header} fill>{children}</ContentContainer>;
  }

  static isFullScreen(height, maxHeight, width, maxWidth) {
    if (maxHeight <= 0 || maxWidth <= 0) {
      return false;
    }
    return height >= maxHeight && width >= maxWidth;
  }

  static isMarginValid(dimension, dimensionMax) {
    if (dimensionMax <= 0) {
      return true;
    }
    return dimensionMax >= dimension + POPUP_MARGIN;
  }

  static shouldShowArrow(arrow, arrowPosition, contentHeight, contentHeightMax, contentWidth, contentWidthMax) {
    if (arrow) {
      if (['top', 'bottom'].indexOf(arrowPosition) >= 0) {
        return Popup.isMarginValid(contentHeight, contentHeightMax);
      }
      return Popup.isMarginValid(contentWidth, contentWidthMax);
    }
    return false;
  }

  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleResize = this.debounce(this.handleResize.bind(this), 100);
  }

  componentDidMount() {
    if (this.props.closeOnEsc) {
      document.addEventListener('keydown', this.handleKeydown);
    }
    if (this.props.closeOnResize) {
      window.addEventListener('resize', this.handleResize);
    }
  }

  componentWillUnmount() {
    if (this.props.closeOnEsc) {
      document.removeEventListener('keydown', this.handleKeydown);
    }

    if (this.props.closeOnResize) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  handleResize(event) {
    if (this.props.closeOnResize && this.props.onRequestClose) {
      this.props.onRequestClose(event);
    }
  }

  handleClickOutside(event) {
    if (this.props.closeOnOutsideClick && this.props.onRequestClose) {
      this.props.onRequestClose(event);
    }
  }

  handleKeydown(event) {
    if (event.keyCode === KEYCODES.ESCAPE && this.props.onRequestClose) {
      this.props.onRequestClose(event);
    }
  }

  debounce(fn, delay) {
    let timer = null;
    return (...args) => {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  }

  render() {
    const {
      arrow,
      arrowPosition,
      children,
      classNameContent,
      closeOnEsc,
      closeOnOutsideClick,
      closeOnResize,
      contentHeight,
      contentHeightMax,
      contentWidth,
      contentWidthMax,
      isHeaderDisabled,
      onRequestClose,
      refCallback,
      ...customProps
    } = this.props;

    const showArrow = Popup.shouldShowArrow(arrow, arrowPosition, contentHeight, contentHeightMax, contentWidth, contentWidthMax);
    const contentStyle = Popup.getContentStyle(contentHeight, contentHeightMax, contentWidth, contentWidthMax);
    const isFullScreen = Popup.isFullScreen(contentHeight, contentHeightMax, contentWidth, contentWidthMax);

    let content = children;
    if (isFullScreen && !isHeaderDisabled) {
      content = Popup.addPopupHeader(children, onRequestClose);
    }

    let arrowContent;
    if (showArrow) {
      arrowContent = arrow;
    }

    const popupClassNames = classNames([
      'terra-Popup',
      { 'terra-Popup-showArrow': showArrow },
      { [`${POPUP_CLASSES[arrowPosition]}`]: showArrow },
      customProps.className,
    ]);

    const contentClassNames = classNames([
      'terra-Popup-content',
      { 'terra-Popup-content--isFullScreen': isFullScreen },
      classNameContent,
    ]);

    // Delete the disableOnClickOutside and disableOnClickOutside prop that comes from react-onclickoutside.
    delete customProps.disableOnClickOutside;
    delete customProps.enableOnClickOutside;

    return (
      <div {...customProps} className={popupClassNames} ref={refCallback}>
        {arrowContent}
        <div className={contentClassNames} style={contentStyle}>
          {content}
        </div>
      </div>
    );
  }
}

Popup.propTypes = propTypes;
Popup.defaultProps = defaultProps;

const onClickOutsidePopup = onClickOutside(Popup);
onClickOutsidePopup.positionClasses = POPUP_CLASSES;
onClickOutsidePopup.oppositePositionClasses = POPUP_OPPOSITE_CLASSES;

export default onClickOutsidePopup;
