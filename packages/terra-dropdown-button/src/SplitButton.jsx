import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
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
   * For 'dropdown' type sets what will be shown on the dropdown button.
   *
   * For 'split' type sets what will be shown on the primary button.
   */
  primaryOptionLabel: PropTypes.string.isRequired,
  /**
   * What will be called when the primary button is pressed on split types. Is required for split types.
   * Will be ignored for dropdown types.
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Sets the styles of the component. 'emphasis' variant is only valid on the 'dropdown' type.
   * Must be either 'neutral' or 'emphasis'.
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

    this.state = { isOpen: false };
  }

  handleDropdownButtonClick() {
    this.setState({ isOpen: true });
  }

  handleDropdownRequestClose() {
    this.setState({ isOpen: false });
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

    const finalVariant = variant !== 'emphasis' ? variant : 'neutral';

    return (
      <DropdownButtonBase
        {...customProps}
        buttons={children}
        isOpen={this.state.isOpen}
        requestClose={this.handleDropdownRequestClose}
        disabled={disabled}
        isBlock={isBlock}
      >
        <button
          type="button"
          className={cx('split-button-primary', { 'is-block': isBlock }, finalVariant)}
          onClick={onClick}
          disabled={disabled}
          tabIndex={disabled ? '-1' : undefined}
          aria-disabled={disabled}
        >
          {primaryOptionLabel}
        </button>
        <button
          type="button"
          onClick={this.handleDropdownButtonClick}
          className={cx('split-button-chevron', { 'is-active': this.state.isOpen }, finalVariant)}
          disabled={disabled}
          tabIndex={disabled ? '-1' : undefined}
          aria-disabled={disabled}
          aria-expanded={this.state.isOpen || undefined}
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
