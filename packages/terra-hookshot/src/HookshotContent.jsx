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
   * The function callback when am escape keydown event occurs..
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

const defaultProps = {
  onEsc: null,
  onOutsideClick: null,
  onResize: null,
};

class HookshotContent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleResize = this.debounce(this.handleResize.bind(this), 100);
  }

  componentDidMount() {
    if (this.props.onEsc) {
      document.addEventListener('keydown', this.handleKeydown);
    }

    if (this.props.onResize) {
      window.addEventListener('resize', this.handleResize);
    }
  }

  componentWillUnmount() {
    if (this.props.onEsc) {
      document.removeEventListener('keydown', this.handleKeydown);
    }

    if (this.props.onResize) {
      window.removeEventListener('resize', this.handleResize);
    }
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
HookshotContent.defaultProps = defaultProps;
const onClickOutsideContent = onClickOutside(HookshotContent);

export default onClickOutsideContent;
