import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import onClickOutside from 'react-onclickoutside';
import ContentContainer from 'terra-content-container';
import IconClose from 'terra-icon/lib/icon/IconClose';
import FocusTrap from 'focus-trap-react';
import styles from './PopupContent.scss';

const cx = classNames.bind(styles);
/**
 * Directional classes to be applied by a presenting component.
 */
const CONTENT_ATTRS = {
  top: 'data-arrow-top',
  bottom: 'data-arrow-bottom',
  left: 'data-arrow-left',
  right: 'data-arrow-right',
};

/**
 * Mirrored directional classes, used to flip the arrow on repositioning.
 */
const MIRRORED_CONTENT_ATTRS = {
  top: 'data-arrow-bottom',
  bottom: 'data-arrow-top',
  left: 'data-arrow-right',
  right: 'data-arrow-left',
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
const POPUP_MARGIN = 10;

/**
 * Rounded corner size to be used when calculating the arrow offset.
 */
const CORNER_SIZE = 3;

const propTypes = {
  /**
   * The children to be presented as the popup's content.
   */
  children: PropTypes.node.isRequired,
  /**
   * The height value in px, to be applied to the content container.
   */
  contentHeight: PropTypes.number.isRequired,
  /**
   * The width value in px, to be applied to the content container.
   */
  contentWidth: PropTypes.number.isRequired,
  /**
   * The function that should be triggered when a close is indicated.
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * The arrow to be placed within the popup frame.
   */
  arrow: PropTypes.element,
  /**
   * The initial arrow position.
   */
  arrowPosition: PropTypes.oneOf(ARROW_POSITIONS),
  /**
   * CSS classnames that are appended to the popup content body.
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
   * The maximum height value in px, to be applied to the content container. Used with responsive behavior for actual height.
   */
  contentHeightMax: PropTypes.number,
  /**
   * The maximum width value in px, to be applied to the content container. Used with responsive behavior for actual width.
   */
  contentWidthMax: PropTypes.number,
  /**
   * Should the default behavior, that inserts a header when constraints are breached, be disabled.
   */
  isHeaderDisabled: PropTypes.bool,
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
  static getContentStyle(arrow, arrowPosition, height, maxHeight, width, maxWidth) {
    const validHeight = maxHeight <= 0 || height <= maxHeight ? height : maxHeight;
    const validWidth = maxWidth <= 0 || width <= maxWidth ? width : maxWidth;
    return { height: `${validHeight.toString()}px`, width: `${validWidth.toString()}px` };
  }

  static addPopupHeader(children, onRequestClose) {
    const icon = <IconClose height="20" width="20" />;
    const button = <button className={cx('close')} onClick={onRequestClose}>{icon}</button>;
    const header = <div className={cx('header')}>{button}</div>;
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
    const contentStyle = PopupContent.getContentStyle(arrow, arrowPosition, contentHeight, contentHeightMax, contentWidth, contentWidthMax);
    const isFullScreen = PopupContent.isFullScreen(contentHeight, contentHeightMax, contentWidth, contentWidthMax);

    let content = children;
    if (isFullScreen && !isHeaderDisabled) {
      content = PopupContent.addPopupHeader(children, onRequestClose);
    }

    let arrowContent;
    if (showArrow) {
      arrowContent = arrow;
    }

    const roundedCorners = arrow && !isFullScreen;
    const innerClassNames = cx([
      'inner',
      { isFullScreen },
      { roundedCorners },
      classNameInner,
    ]);

    // Delete the disableOnClickOutside and enableOnClickOutside prop that comes from react-onclickoutside.
    delete customProps.disableOnClickOutside;
    delete customProps.enableOnClickOutside;

    return (
      <FocusTrap>
        <div {...customProps} tabIndex="0" className={cx('popupContent')} ref={refCallback}>
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
onClickOutsideContent.Opts = {
  positionAttrs: CONTENT_ATTRS,
  mirroredPositionAttrs: MIRRORED_CONTENT_ATTRS,
  popupMargin: POPUP_MARGIN,
  cornerSize: CORNER_SIZE,
};

export default onClickOutsideContent;
