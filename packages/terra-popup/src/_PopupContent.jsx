import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import IconClose from 'terra-icon/lib/icon/IconClose';
import FocusTrap from 'focus-trap-react';
import Hookshot from 'terra-hookshot';
import styles from './PopupContent.scss';

const cx = classNames.bind(styles);
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
   * The function that should be triggered when a resize is indicated.
   */
  onResize: PropTypes.func.isRequired,
  /**
   * The arrow to be placed within the popup frame.
   */
  arrow: PropTypes.element,
  /**
   * CSS classnames that are appended to the popup content body.
   */
  classNameInner: PropTypes.string,
  /**
   * The maximum height value in px, to be applied to the content container. Used with responsive behavior for actual height.
   */
  contentHeightMax: PropTypes.number,
  /**
   * The maximum width value in px, to be applied to the content container. Used with responsive behavior for actual width.
   */
  contentWidthMax: PropTypes.number,
  /**
   * Should the popup content have tab focus. Set this is your content doesn't contain any focusable elements.
   */
  isFocusedDisabled: PropTypes.bool,
  /**
   * Should the default behavior, that inserts a header when constraints are breached, be disabled.
   */
  isHeaderDisabled: PropTypes.bool,
  /**
   * Whether or not the height provided is using a predefined value.
   */
  isHeightAutomatic: PropTypes.bool,
  /**
   * Whether or not the width provided is using a predefined value.
   */
  isWidthAutomatic: PropTypes.bool,
  /**
   * The function that should be triggered when a content resize is indicated.
   */
  onContentResize: PropTypes.func,
  /**
   * The function returning the frame html reference.
   */
  refCallback: PropTypes.func,
  /**
   * A callback function to let the containing component (e.g. modal) to regain focus.
   */
  releaseFocus: PropTypes.func,
  /**
   * A callback function to request focus from the containing component (e.g. modal).
   */
  requestFocus: PropTypes.func,
};

const defaultProps = {
  classNameInner: null,
  contentHeightMax: -1,
  contentWidthMax: -1,
  isFocusedDisabled: false,
  isHeaderDisabled: false,
  isHeightAutomatic: false,
  isWidthAutomatic: false,
};

class PopupContent extends React.Component {
  static getDimensionStyle(value, maxValue, isAutomatic) {
    if (value > 0) {
      if (maxValue > 0 && value >= maxValue) {
        return `${maxValue.toString()}px`;
      } else if (!isAutomatic) {
        return `${value.toString()}px`;
      }
    }
    return null;
  }

  static getContentStyle(height, maxHeight, width, maxWidth, isHeightAutomatic, isWidthAutomatic) {
    const heightStyle = PopupContent.getDimensionStyle(height, maxHeight, isHeightAutomatic);
    const widthStyle = PopupContent.getDimensionStyle(width, maxWidth, isWidthAutomatic);
    const contentStyle = {};
    if (heightStyle) {
      contentStyle.height = heightStyle;
    }
    if (widthStyle) {
      contentStyle.width = widthStyle;
    }
    return contentStyle;
  }

  static addPopupHeader(children, onRequestClose) {
    const icon = <IconClose height="20" width="20" />;
    const button = <button className={cx('close')} onClick={onRequestClose}>{icon}</button>;
    const header = <div className={cx('header')}>{button}</div>;
    return <ContentContainer header={header} fill>{children}</ContentContainer>;
  }

  static isBounded(value, maxValue) {
    return value > 0 && maxValue > 0 && value >= maxValue;
  }

  static cloneChildren(children, isHeightAutomatic, isWidthAutomatic, isHeightBounded, isWidthBounded) {
    const newProps = {};
    if (isHeightAutomatic) {
      newProps.isHeightBounded = isHeightBounded;
    }
    if (isWidthAutomatic) {
      newProps.isWidthBounded = isWidthBounded;
    }
    return React.Children.map(children, child => React.cloneElement(child, newProps));
  }

  constructor(props) {
    super(props);
    this.handleOnResize = this.handleOnResize.bind(this);
  }

  componentDidMount() {
    if (this.props.requestFocus) {
      this.props.requestFocus();
    }
    // Value used to verify horizontal resize.
    this.windowWidth = window.innerWidth;
  }

  componentWillUnmount() {
    if (this.props.releaseFocus) {
      this.props.releaseFocus();
    }
  }

  handleOnResize(event) {
    if (this.props.onResize) {
      this.props.onResize(event, this.windowWidth);
    }
  }

  render() {
    const {
      arrow,
      children,
      classNameInner,
      contentHeight,
      contentHeightMax,
      contentWidth,
      contentWidthMax,
      isFocusedDisabled,
      isHeaderDisabled,
      isHeightAutomatic,
      isWidthAutomatic,
      onRequestClose,
      onResize,
      onContentResize,
      refCallback,
      releaseFocus,
      requestFocus,
      ...customProps
    } = this.props;

    const contentStyle = PopupContent.getContentStyle(contentHeight, contentHeightMax, contentWidth, contentWidthMax, isHeightAutomatic, isWidthAutomatic);
    const isHeightBounded = PopupContent.isBounded(contentHeight, contentHeightMax);
    const isWidthBounded = PopupContent.isBounded(contentWidth, contentWidthMax);
    const isFullScreen = isHeightBounded && isWidthBounded;

    let content = PopupContent.cloneChildren(children, isHeightAutomatic, isWidthAutomatic, isHeightBounded, isWidthBounded);
    if (isFullScreen && !isHeaderDisabled) {
      content = PopupContent.addPopupHeader(content, onRequestClose);
    }

    const contentClassNames = cx([
      'content',
      customProps.className,
    ]);

    const roundedCorners = arrow && !isFullScreen;
    const arrowContent = roundedCorners ? arrow : undefined;
    const innerClassNames = cx([
      'inner',
      { 'is-full-screen': isFullScreen },
      { 'rounded-corners': roundedCorners },
      classNameInner,
    ]);

    const heightData = isHeightAutomatic ? { 'data-terra-popup-automatic-height': true } : {};
    const widthData = isWidthAutomatic ? { 'data-terra-popup-automatic-width': true } : {};

    return (
      <FocusTrap focusTrapOptions={{ returnFocusOnDeactivate: true }}>
        <Hookshot.Content
          {...customProps}
          className={contentClassNames}
          tabIndex={isFocusedDisabled ? null : '0'}
          data-terra-popup-content
          onContentResize={(isHeightAutomatic || isWidthAutomatic) ? onContentResize : undefined}
          onEsc={onRequestClose}
          onOutsideClick={onRequestClose}
          onResize={this.handleOnResize}
          refCallback={refCallback}
        >
          {arrowContent}
          <div {...heightData} {...widthData} className={innerClassNames} style={contentStyle}>
            {content}
          </div>
        </Hookshot.Content>
      </FocusTrap>
    );
  }
}

PopupContent.propTypes = propTypes;
PopupContent.defaultProps = defaultProps;
PopupContent.Opts = {
  cornerSize: CORNER_SIZE,
};

export default PopupContent;
