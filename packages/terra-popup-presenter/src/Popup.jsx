import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import onClickOutside from 'react-onclickoutside';
import './Popup.scss';

const POPUP_CLASSES = {
  top: 'terra-Popup--arrowTop',
  bottom: 'terra-Popup--arrowBottom',
  left: 'terra-Popup--arrowLeft',
  right: 'terra-Popup--arrowRight',
};

const POPUP_OPPOSITE_CLASSES = {
  top: 'terra-Popup--arrowBottom',
  bottom: 'terra-Popup--arrowTop',
  left: 'terra-Popup--arrowRight',
  right: 'terra-Popup--arrowLeft',
};

const KEYCODES = {
  ESCAPE: 27,
};

const propTypes = {
  /**
   * The arrow to be placed within the popup frame.
   */
  arrow: PropTypes.element,
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
   * The maximum height to set for popup content.
   */
  contentMaxHeight: PropTypes.string,
  /**
   * The maximum width of the popup content.
   */
  contentMaxWidth: PropTypes.string,
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
  arrow: undefined,
  closeOnEsc: true,
  closeOnOutsideClick: true,
  closeOnResize: true,
  content: undefined,
  contentMaxHeight: undefined,
  contentMaxWidth: undefined,
  onRequestClose: undefined,
  refCallback: undefined,
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

  render() {
    const { 
      arrow,
      closeOnEsc,
      closeOnOutsideClick,
      closeOnResize,
      content,
      contentMaxHeight,
      contentMaxWidth,
      onRequestClose,
      enableOnClickOutside,
      disableOnClickOutside,
      refCallback,
      ...customProps,
    } = this.props;

    const frameClassNames = classNames([
      'terra-Popup',
      { 'terra-Popup-showArrow': arrow },
      customProps.className,
    ]);

    const clonedContent = React.cloneElement(content, {onRequestClose});

    const contentStyle = {};
    if (contentMaxHeight) {
      contentStyle.maxHeight = contentMaxHeight;
    }

    if (contentMaxWidth) {
      contentStyle.maxWidth = contentMaxWidth;
    }

    return (
      <div {...customProps} className={frameClassNames} ref={refCallback}>
        {arrow}
        <div className="terra-Popup-content" style={contentStyle}>
          {clonedContent}
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
