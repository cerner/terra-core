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
   * The function that should be triggered when a close is indicated.
   */
  onRequestClose: PropTypes.func.isRequired,
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
   * The function returning the frame html reference.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  closeOnEsc: false,
  closeOnOutsideClick: false,
  closeOnResize: false,
};

class HookshotContent extends React.Component {
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
      children,
      closeOnEsc,
      closeOnOutsideClick,
      closeOnResize,
      onRequestClose,
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
HookshotContent.defaultProps = defaultProps;
const onClickOutsideContent = onClickOutside(HookshotContent);

export default onClickOutsideContent;
