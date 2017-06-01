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
  'right'
];

/**
 * The tiny breakpoint value, at which to flex responsiveness.
 */
const TINY_BREAKPOINT = 544;

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
   * The content to be presented within the popup.
   */
  content: PropTypes.element.isRequired,
  /**
   * The maximum height to set for popup content in px, also used with responsive behavior for actual height.
   */
  contentMaxHeight: PropTypes.number,
  /**
   * The maximum width of the popup content in px, also used with responsive behavior for actual width.
   */
  contentMaxWidth: PropTypes.number,
  /**
   * Should the default header be disabled at small form factor.
   */
  disableHeader: PropTypes.bool,
  /**
   * Should the popup expand to fill at the defined breakpoint.
   */
  isResponsive: PropTypes.bool,
  /**
   * The function that should be triggered when a close is indicated.
   */
  onRequestClose: PropTypes.func,
  /**
   * The function returning the frame html reference.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  arrowPosition: 'top',
  closeOnEsc: false,
  closeOnOutsideClick: false,
  closeOnResize: false,
  disableHeader: false,
  isResponsive: false,
};

class Popup extends React.Component {
  debounce(fn, delay) {
    let timer = null;
    return function () {
      const context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
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

  addPopupHeader(content, onRequestClose) {
    const icon = <IconClose className="terra-Popup-closeButton" onClick={onRequestClose} height="30" width="30" style={{float: 'right'}} />;
    const header = <div className="terra-Popup-header">{icon}</div>;
    return <ContentContainer header={header} fill>{content}</ContentContainer>;
  }

  render() {
    const { 
      arrow,
      arrowPosition,
      closeOnEsc,
      closeOnOutsideClick,
      closeOnResize,
      content,
      contentMaxHeight,
      contentMaxWidth,
      disableHeader,
      isResponsive,
      onRequestClose,
      enableOnClickOutside,
      disableOnClickOutside,
      refCallback,
      ...customProps,
    } = this.props;

    const popupClassNames = classNames([
      'terra-Popup',
      { 'terra-Popup-showArrow': arrow },
      { [`${POPUP_CLASSES[arrowPosition]}`]: arrow },
      customProps.className,
    ]);

    const contentStyle = {};
    if (contentMaxHeight) {
      contentStyle.maxHeight = contentMaxHeight.toString() + 'px';
    }
    if (contentMaxWidth) {
      contentStyle.maxWidth = contentMaxWidth.toString() + 'px';
    }

    let contentForDisplay = React.cloneElement(content, {onRequestClose});
    const fill = isResponsive && contentMaxWidth <= TINY_BREAKPOINT;
    if (fill) {
      contentStyle.height = contentStyle.maxHeight;
      contentStyle.width = contentStyle.maxWidth;

      if (!disableHeader) {
        contentForDisplay = this.addPopupHeader(contentForDisplay, onRequestClose);
      }
    }

    const contentClassNames = classNames([
      'terra-Popup-content',
      { 'terra-Popup-content--fill': fill },
    ]);

    return (
      <div {...customProps} className={popupClassNames} ref={refCallback}>
        {arrow}
        <div className={contentClassNames} style={contentStyle}>
          {contentForDisplay}
        </div>
      </div>
    );
  }
}

const onClickOutsidePopup = onClickOutside(Popup);
onClickOutsidePopup.propTypes = propTypes;
onClickOutsidePopup.defaultProps = defaultProps;
onClickOutsidePopup.positionClasses = POPUP_CLASSES;
onClickOutsidePopup.oppositePositionClasses = POPUP_OPPOSITE_CLASSES;

export default onClickOutsidePopup;
