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
   * Should the default behavior, that inserts a header when constraints are breached, be disabled.
   */
  isHeaderDisabled: PropTypes.bool,
  /**
   * Whether or not the height provided were using predefined value.
   */
  isHeightDynamic: PropTypes.bool,
  /**
   * Whether or not the width provided were using predefined value.
   */
  isWidthDynamic: PropTypes.bool,
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
  isHeaderDisabled: false,
  isHeightDynamic: false,
  isWidthDynamic: false,
};

class PopupContent extends React.Component {
  static getDimensionStyle(value, maxValue, isDynamic) {
    if (value > 0) {
      if (maxValue > 0 && value >= maxValue) {
        return `${maxValue.toString()}px`;
      } else if (!isDynamic) {
        return `${value.toString()}px`;
      }
    }
    return null;
  }

  static getContentStyle(height, maxHeight, width, maxWidth, isHeightDynamic, isWidthDynamic) {
    const heightStyle = PopupContent.getDimensionStyle(height, maxHeight, isHeightDynamic);
    const widthStyle = PopupContent.getDimensionStyle(width, maxWidth, isWidthDynamic);
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

  static cloneChildren(children, isHeightDynamic, isWidthDynamic, isHeightBounded, isWidthBounded) {
    const newProps = {};
    if (isHeightDynamic) {
      newProps.isHeightBounded = isHeightBounded;
    }
    if (isWidthDynamic) {
      newProps.isWidthBounded = isWidthBounded;
    }
    return React.Children.map(children, child => React.cloneElement(child, newProps));
  }

  componentDidMount() {
    if (this.props.requestFocus) {
      this.props.requestFocus();
    }
  }

  componentWillUnmount() {
    if (this.props.releaseFocus) {
      this.props.releaseFocus();
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
      isHeaderDisabled,
      isHeightDynamic,
      isWidthDynamic,
      onRequestClose,
      onResize,
      refCallback,
      releaseFocus,
      requestFocus,
      ...customProps
    } = this.props;

    const contentStyle = PopupContent.getContentStyle(contentHeight, contentHeightMax, contentWidth, contentWidthMax, isHeightDynamic, isWidthDynamic);
    const isHeightBounded = PopupContent.isBounded(contentHeight, contentHeightMax);
    const isWidthBounded = PopupContent.isBounded(contentWidth, contentWidthMax);
    const isFullScreen = isHeightBounded && isWidthBounded;

    let content = PopupContent.cloneChildren(children, isHeightDynamic, isWidthDynamic, isHeightBounded, isWidthBounded);
    if (isFullScreen && !isHeaderDisabled) {
      content = PopupContent.addPopupHeader(content, onRequestClose);
    }

    const roundedCorners = arrow && !isFullScreen;
    const arrowContent = roundedCorners ? arrow : undefined;
    const innerClassNames = cx([
      'inner',
      { 'is-full-screen': isFullScreen },
      { 'rounded-corners': roundedCorners },
      classNameInner,
    ]);

    const dynamicHeight = isHeightDynamic ? { 'data-terra-popup-dynamic-height': true } : {};
    const dynamicWidth = isWidthDynamic ? { 'data-terra-popup-dynamic-width': true } : {};

    return (
      <FocusTrap>
        <Hookshot.Content
          {...customProps}
          tabIndex="0"
          data-terra-popup-content
          onEsc={onRequestClose}
          onOutsideClick={onRequestClose}
          onResize={onResize}
          refCallback={refCallback}
        >
          {arrowContent}
          <div {...dynamicHeight} {...dynamicWidth} className={innerClassNames} style={contentStyle}>
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
