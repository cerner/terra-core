import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import KeyCode from 'keycode-js';
import DropdownButtonBase from './_DropdownButtonBase';
import styles from './SplitButton.module.scss';
import Button from './_Button';

const cx = classNames.bind(styles);

const Variants = {
  NEUTRAL: 'neutral',
  GHOST: 'ghost',
};

const propTypes = {
  /**
   * The options to display in the dropdown. Should be of type `Button`.
   */
  children: PropTypes.node.isRequired,
  /**
   * Determines whether the primary button and expanding the dropdown should be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Determines whether the component should have block styles applied. The dropdown will match the component's width.
   */
  isBlock: PropTypes.bool,
  /**
   * Sets the text that will be shown on the primary button which is outside the dropdown.
   */
  primaryOptionLabel: PropTypes.string.isRequired,
  /**
   * What will be called when the primary button is pressed.
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Sets the styles of the component. Must be either 'neutral' or 'ghost'.
   */
  variant: PropTypes.oneOf(Object.values(Variants)),
};

const defaultProps = {
  disabled: false,
  isBlock: false,
  variant: 'neutral',
};

class SplitButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleDropdownButtonClick = this.handleDropdownButtonClick.bind(this);
    this.handleDropdownRequestClose = this.handleDropdownRequestClose.bind(this);
    this.handlePrimaryKeyDown = this.handlePrimaryKeyDown.bind(this);
    this.handlePrimaryKeyUp = this.handlePrimaryKeyUp.bind(this);
    this.handleChevronKeyDown = this.handleChevronKeyDown.bind(this);
    this.handleChevronKeyUp = this.handleChevronKeyUp.bind(this);

    this.state = { isOpen: false, chevronActive: false, primaryActive: false };
  }

  handleDropdownButtonClick() {
    this.setState({ isOpen: true });
  }

  handleDropdownRequestClose() {
    this.setState({ isOpen: false });
  }

  /*
    In FireFox active styles don't get applied onKeyDown
   */
  handlePrimaryKeyDown(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode == KeyCode.KEY_RETURN) {
      this.setState({ primaryActive: true });
    }
  }

  handlePrimaryKeyUp(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode == KeyCode.KEY_RETURN) {
      this.setState({ primaryActive: false });
    }
  }

  handleChevronKeyDown(event) {
    if (event.keyCode === KeyCode.KEY_SPACE) {
      this.setState({ chevronActive: true });
    }
  }

  handleChevronKeyUp(event) {
    if (event.keyCode === KeyCode.KEY_SPACE) {
      this.setState({ chevronActive: false });
    }
  }

  render() {
    const {
      children,
      disabled,
      isBlock,
      primaryOptionLabel,
      onClick,
      variant,
      ...customProps
    } = this.props;

    const {
      isOpen,
      primaryActive,
      chevronActive
    } = this.state;

    const finalVariant = variant !== 'emphasis' ? variant : 'neutral';

    return (
      <DropdownButtonBase
        {...customProps}
        buttons={children}
        isOpen={isOpen}
        requestClose={this.handleDropdownRequestClose}
        disabled={disabled}
        isBlock={isBlock}
      >
        <button
          type="button"
          className={cx('split-button-primary', { 'is-block': isBlock }, { 'is-active': primaryActive }, finalVariant)}
          onClick={onClick}
          onKeyDown={this.handlePrimaryKeyDown}
          onKeyUp={this.handlePrimaryKeyUp}
          disabled={disabled}
          tabIndex={disabled ? '-1' : undefined}
          aria-disabled={disabled}
        >
          {primaryOptionLabel}
        </button>
        <button
          type="button"
          onClick={this.handleDropdownButtonClick}
          onKeyDown={this.handleChevronKeyDown}
          onKeyUp={this.handleChevronKeyUp}
          className={cx('split-button-chevron', { 'is-active': isOpen || chevronActive }, finalVariant)}
          disabled={disabled}
          tabIndex={disabled ? '-1' : undefined}
          aria-disabled={disabled}
          aria-expanded={isOpen || undefined}
          aria-haspopup
          aria-label="More Options"
        >
          <span className={cx('chevron-icon')} />
        </button>
      </DropdownButtonBase>
    );
  }
}

SplitButton.propTypes = propTypes;
SplitButton.defaultProps = defaultProps;

export default SplitButton;
export { Button, Variants };
