import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'terra-toggle';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ShowHide.module.scss';
import Button from './_ShowHideButton';

const cx = classNames.bind(styles);
const openedButtonText = 'Hide';
const closedButtonText = 'Show More';

const propTypes = {
  /**
   * Icon displayed next to text content within the show-hide button
   */
  icon: PropTypes.element,
  /**
   * Sets the show-hide initial state to open
   */
  isInitiallyOpen: PropTypes.bool,
  /**
   * Sets the text size. One of mini, tiny, small, medium, large, huge.
   */
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'huge']),
};

const defaultProps = {
  isInitiallyOpen: false,
  icon: <IconChevronDown />,
};

class ShowHide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isInitiallyOpen,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isInitiallyOpen === this.props.isInitiallyOpen) {
      return;
    }

    this.setState({ isOpen: nextProps.isInitiallyOpen });
  }

  handleOnClick(e) {
    e.preventDefault();

    // Fire event from toggle handlers
    if (!this.state.isOpen && this.props.onOpen) {
      this.props.onOpen();
    } else if (this.state.isOpen && this.props.onClose) {
      this.props.onClose();
    }

    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const {
      buttonAttrs,
      children,
      icon,
      isInitiallyOpen,
      onClose,
      onOpen,
      size,
      ...customProps
    } = this.props;

    const buttonText = !this.state.isOpen ? closedButtonText : openedButtonText;
    const showHideClassName = cx([
      'button',
      { 'is-open': this.state.isOpen },
      { [`size-${size}`]: size },
      customProps.className,
    ]);

    const button = (
      <Button
        {...buttonAttrs}
        icon={<span className={cx('icon')}>{icon}</span>}
        aria-expanded={this.state.isOpen}
        text={buttonText}
        onClick={this.handleOnClick}
      />
    );

    // TODO set text size. through class stying?
    return (
      <div {...customProps} className={showHideClassName}>
        <Toggle isOpen={this.state.isOpen} >
          {this.props.children}
        </Toggle>
        {button}
      </div>
    );
  }
}

ShowHide.propTypes = propTypes;
ShowHide.defaultProps = defaultProps;

export default ShowHide;
