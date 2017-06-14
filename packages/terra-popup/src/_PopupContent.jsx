import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import onClickOutside from 'react-onclickoutside';
import ContentContainer from 'terra-content-container';
import IconClose from 'terra-icon/lib/icon/IconClose';
import FocusTrap from 'focus-trap-react';
import './PopupContent.scss';

/**
 * Directional classes to be applied by a presenting component.
 */
const CONTENT_CLASSES = {
  top: 'terra-PopupContent--arrowTop',
  bottom: 'terra-PopupContent--arrowBottom',
  left: 'terra-PopupContent--arrowLeft',
  right: 'terra-PopupContent--arrowRight',
};

/**
 * Mirrored directional classes, used to flip the arrow on repositioning.
 */
const CONTENT_OPPOSITE_CLASSES = {
  top: 'terra-PopupContent--arrowBottom',
  bottom: 'terra-PopupContent--arrowTop',
  left: 'terra-PopupContent--arrowRight',
  right: 'terra-PopupContent--arrowLeft',
};

/**
 * Key code value for the escape key.
 */
const KEYCODES = {
  ESCAPE: 27,
};

/**
 * Valid positions for the arrow, applies a margin to the corresponding side.
 */
const ARROW_POSITIONS = [
  'top',
  'bottom',
  'left',
  'right',
];

/**
 * Margin value used for calculations.
 */
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
  classNameInner: PropTypes.string,
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
  classNameInner: null,
  closeOnEsc: false,
  closeOnOutsideClick: false,
  closeOnResize: false,
  contentHeightMax: -1,
  contentWidthMax: -1,
  isHeaderDisabled: false,
};

class PopupContent extends React.Component {
  static getContentStyle(height, maxHeight, width, maxWidth) {
    const validHeight = maxHeight <= 0 || height <= maxHeight ? height : maxHeight;
    const validWidth = maxWidth <= 0 || width <= maxWidth ? width : maxWidth;
    return { height: `${validHeight.toString()}px`, width: `${validWidth.toString()}px` };
  }

  static addPopupHeader(children, onRequestClose) {
    const icon = <IconClose tabIndex="0" height="30" width="30" />;
    const button = <button className="terra-PopupContent-close" onClick={onRequestClose} style={{ float: 'right' }}>{icon}</button>;
    const header = <div className="terra-PopupContent-header">{button}</div>;
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
        return PopupContent.isMarginValid(contentHeight, contentHeightMax);
      }
      return PopupContent.isMarginValid(contentWidth, contentWidthMax);
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
      event.preventDefault();
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
      classNameInner,
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

    const showArrow = PopupContent.shouldShowArrow(arrow, arrowPosition, contentHeight, contentHeightMax, contentWidth, contentWidthMax);
    const contentStyle = PopupContent.getContentStyle(contentHeight, contentHeightMax, contentWidth, contentWidthMax);
    const isFullScreen = PopupContent.isFullScreen(contentHeight, contentHeightMax, contentWidth, contentWidthMax);

    let content = children;
    if (isFullScreen && !isHeaderDisabled) {
      content = PopupContent.addPopupHeader(children, onRequestClose);
    }

    let arrowContent;
    if (showArrow) {
      arrowContent = arrow;
    }

    const popupContentClassNames = classNames([
      'terra-PopupContent',
      { 'terra-PopupContent-showArrow': showArrow },
      { [`${CONTENT_CLASSES[arrowPosition]}`]: showArrow },
      customProps.className,
    ]);

    const innerClassNames = classNames([
      'terra-PopupContent-inner',
      { 'terra-PopupContent-inner--isFullScreen': isFullScreen },
      classNameInner,
    ]);

    // Delete the disableOnClickOutside and enableOnClickOutside prop that comes from react-onclickoutside.
    delete customProps.disableOnClickOutside;
    delete customProps.enableOnClickOutside;

    return (
      <FocusTrap>
        <div {...customProps} tabIndex="0" className={popupContentClassNames} ref={refCallback}>
          {arrowContent}
          <div className={innerClassNames} style={contentStyle}>
            {content}
          </div>
        </div>
      </FocusTrap>
    );
  }
}

PopupContent.propTypes = propTypes;
PopupContent.defaultProps = defaultProps;

const onClickOutsideContent = onClickOutside(PopupContent);
onClickOutsideContent.positionClasses = CONTENT_CLASSES;
onClickOutsideContent.oppositePositionClasses = CONTENT_OPPOSITE_CLASSES;

export default onClickOutsideContent;
