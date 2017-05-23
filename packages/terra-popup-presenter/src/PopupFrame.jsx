import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './PopupFrame.scss';

const FRAME_CLASSES = {
  top: 'terra-PopupFrame--arrowTop',
  bottom: 'terra-PopupFrame--arrowBottom',
  left: 'terra-PopupFrame--arrowLeft',
  right: 'terra-PopupFrame--arrowRight',
};

const FRAME_OPPOSITE_CLASSES = {
  top: 'terra-PopupFrame--arrowBottom',
  bottom: 'terra-PopupFrame--arrowTop',
  left: 'terra-PopupFrame--arrowRight',
  right: 'terra-PopupFrame--arrowLeft',
};

const KEYCODES = {
  ESCAPE: 27,
};

const propTypes = {
  /**
   * The child elements passed to the component.
   */
  arrow: PropTypes.element,
  /**
   * The child elements passed to the component.
   */
  content: PropTypes.element,
  /**
   * Whether or not the using the escape key should also trigger the onClickOutside event.
   */
  closeOnEsc: PropTypes.bool,
  /**
   * Whether or not the using the escape key should also trigger the onClickOutside event.
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * Whether or not the using the escape key should also trigger the onClickOutside event.
   */
  closeOnResize: PropTypes.bool,
  /**
   * The function that should be triggered when a close is indicated.
   */
  onRequestClose: PropTypes.func,
  /**
   * The function that should be triggered when a close is indicated.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  arrow: undefined,
  content: undefined,
  closeOnEsc: true,
  closeOnOutsideClick: true,
  closeOnResize: true,
  onRequestClose: undefined,
  refCallback: undefined,
};

class PopupFrame extends React.Component {
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
      onRequestClose,
      enableOnClickOutside,
      disableOnClickOutside,
      refCallback,
      ...customProps,
    } = this.props;

    const frameClassNames = classNames([
      'terra-PopupFrame',
      { 'terra-PopupFrame-showArrow': arrow },
      customProps.className,
    ]);

    return (
      <div {...customProps} className={frameClassNames} ref={refCallback}>
        {arrow}
        <div className="terra-PopupFrame-content">
          {content}
        </div>
      </div>
    );
  }
}

PopupFrame.propTypes = propTypes;
PopupFrame.defaultProps = defaultProps;
PopupFrame.positionClasses = FRAME_CLASSES;
PopupFrame.oppositePositionClasses = FRAME_OPPOSITE_CLASSES;

export default PopupFrame;
