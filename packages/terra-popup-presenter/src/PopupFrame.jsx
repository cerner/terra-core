import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './PopupFrame.scss';

const KEYCODES = {
  ESCAPE: 27,
};

const propTypes = {
  /**
   * The child elements passed to the component.
   */
  children: PropTypes.node,
  /**
   * Whether or not the using the escape key should also trigger the onClickOutside event.
   */
  closeOnEsc: PropTypes.bool,
  /**
   * Whether or not the using the escape key should also trigger the onClickOutside event.
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * The function that should be triggered when a close is indicated.
   */
  onClose: PropTypes.func,
};

const defaultProps = {
  children: [],
  closeOnEsc: true,
  closeOnOutsideClick: true,
  onClose: undefined,
};

class PopupFrame extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentDidMount() {
    if (this.props.closeOnEsc) {
      document.addEventListener('keydown', this.handleKeydown);
    }
  }

  componentWillUnmount() {
    if (this.props.closeOnEsc) {
      document.removeEventListener('keydown', this.handleKeydown);
    }
  }

  handleClickOutside(event) {
    if (this.props.closeOnOutsideClick && this.props.onClose) {
      this.props.onClose(event);
    }
  }

  handleKeydown(event) {
    if (event.keyCode === KEYCODES.ESCAPE && this.props.onClose) {
      this.props.onClose(event);
    }
  }

  render() {
    const { children, closeOnEsc, closeOnOutsideClick, onClose, enableOnClickOutside, disableOnClickOutside, ...customProps } = this.props;
    const frameClassNames = classNames([
      'terra-PopupFrame',
      customProps.className,
    ]);

    return (
      <div {...customProps} className={frameClassNames}>
        {children}
      </div>
    );
  }
}

PopupFrame.propTypes = propTypes;
PopupFrame.defaultProps = defaultProps;

export default PopupFrame;
