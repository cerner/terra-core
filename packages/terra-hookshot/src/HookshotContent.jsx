import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import onClickOutside from 'react-onclickoutside';
import styles from './HookshotContent.scss';

const cx = classNames.bind(styles);
/**
 * Key code value for the escape key.
 */
const KEYCODES = {
  ESCAPE: 27,
};

const propTypes = {
  /**
   * The children to be displayed as content within the content.
   */
  children: PropTypes.node.isRequired,
  /**
   * The function callback when am escape keydown event occurs.
   */
  onEsc: PropTypes.func,
  /**
   * The function callback when a click outside event occurs.
   */
  onOutsideClick: PropTypes.func,
  /**
   * The function callback when a resize event occurs.
   */
  onResize: PropTypes.func,
  /**
   * The function returning the frame html reference.
   */
  refCallback: PropTypes.func,
};

class HookshotContent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleResize = this.debounce(this.handleResize.bind(this), 100);
    this.enableEscListener = this.enableEscListener.bind(this);
    this.disableEscListener = this.disableEscListener.bind(this);
    this.enableResizeListener = this.enableResizeListener.bind(this);
    this.disableResizeListener = this.disableResizeListener.bind(this);
    this.updateListeners = this.updateListeners.bind(this);
  }

  componentDidMount() {
    this.updateListeners();
  }

  componentDidUpdate() {
    this.updateListeners();
  }

  componentWillUnmount() {
    this.disableEscListener();
    this.disableResizeListener();
  }

  handleResize(event) {
    if (this.props.onResize) {
      this.props.onResize(event);
    }
  }

  handleClickOutside(event) {
    if (this.props.onOutsideClick) {
      this.props.onOutsideClick(event);
    }
  }

  handleKeydown(event) {
    if (event.keyCode === KEYCODES.ESCAPE) {
      event.preventDefault();
      this.props.onEsc(event);
    }
  }

  updateListeners() {
    if (this.props.onEsc) {
      this.enableEscListener();
    } else {
      this.disableEscListener();
    }

    if (this.props.onResize) {
      this.enableResizeListener();
    } else {
      this.disableResizeListener();
    }
  }

  enableEscListener() {
    if (!this.escListenerAdded) {
      document.addEventListener('keydown', this.handleKeydown);
      this.escListenerAdded = true;
    }
  }

  disableEscListener() {
    if (this.escListenerAdded) {
      document.removeEventListener('keydown', this.handleKeydown);
      this.escListenerAdded = false;
    }
  }

  enableResizeListener() {
    if (!this.resizeListenerAdded) {
      window.addEventListener('resize', this.handleResize);
      this.resizeListenerAdded = true;
    }
  }

  disableResizeListener() {
    if (this.resizeListenerAdded) {
      window.removeEventListener('resize', this.handleResize);
      this.resizeListenerAdded = false;
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
      children,
      onEsc,
      onOutsideClick,
      onResize,
      refCallback,
      ...customProps
    } = this.props;

    // Delete the disableOnClickOutside and enableOnClickOutside prop that comes from react-onclickoutside.
    delete customProps.disableOnClickOutside;
    delete customProps.enableOnClickOutside;
    delete customProps.closePortal;

    return (
      <div {...customProps} className={cx(['content', customProps.className])} ref={refCallback}>
        {children}
      </div>
    );
  }
}

HookshotContent.propTypes = propTypes;
const onClickOutsideContent = onClickOutside(HookshotContent);

export default onClickOutsideContent;
