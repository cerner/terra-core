import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import KeyCode from 'keycode-js';
import DropdownButtonBase from './_DropdownButtonBase';
import styles from './DropdownButton.module.scss';
import Item from './Item';
import SplitButton, { Variants as SplitButtonVariants } from './SplitButton';

const cx = classNames.bind(styles);

const Variants = {
  NEUTRAL: 'neutral',
  EMPHASIS: 'emphasis',
  GHOST: 'ghost',
};

const propTypes = {
  /**
   * The options to display in the dropdown. Should be comprised of the subcomponent `Item`.
   */
  children: PropTypes.node.isRequired,
  /**
   * Determines whether the dropdown should be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Determines whether the component should have block styles applied. The dropdown will match the component's width.
   */
  isBlock: PropTypes.bool,
  /**
   * Sets the text that will be shown on the dropdown button.
   */
  label: PropTypes.string.isRequired,
  /**
   * Sets the styles of the component. The default is 'neutral'.
   * Must be one of 'neutral', 'emphasis', or 'ghost'.
   */
  variant: PropTypes.oneOf(Object.values(Variants)),
};

const defaultProps = {
  disabled: false,
  isBlock: false,
  variant: 'neutral',
};

class DropdownButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleDropdownButtonClick = this.handleDropdownButtonClick.bind(this);
    this.handleDropdownRequestClose = this.handleDropdownRequestClose.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    this.state = { isOpen: false, isActive: false };
  }

  handleDropdownButtonClick() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  handleDropdownRequestClose(callback) {
    this.setState({ isOpen: false }, typeof callback === 'function' ? callback : undefined);
  }

  /*
    In FireFox active styles don't get applied on space
   */
  handleKeyDown(event) {
    if (event.keyCode === KeyCode.KEY_SPACE) {
      this.setState({ isActive: true });
    }
  }

  handleKeyUp(event) {
    if (event.keyCode === KeyCode.KEY_SPACE) {
      this.setState({ isActive: false });
    }
  }

  render() {
    const {
      children,
      disabled,
      isBlock,
      label,
      variant,
      ...customProps
    } = this.props;

    const { isOpen, isActive } = this.state;

    const classnames = cx(
      'dropdown-button',
      variant,
      { 'is-active': isOpen || isActive },
      { 'is-block': isBlock },
    );

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
          className={classnames}
          onClick={this.handleDropdownButtonClick}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
          disabled={disabled}
          tabIndex={disabled ? '-1' : undefined}
          aria-disabled={disabled}
          aria-expanded={isOpen || undefined}
          aria-haspopup
        >
          <span className={cx('dropdown-button-text')}>{label}</span>
          <span className={cx('caret-icon')} />
        </button>
      </DropdownButtonBase>
    );
  }
}

DropdownButton.propTypes = propTypes;
DropdownButton.defaultProps = defaultProps;

export default DropdownButton;
export {
  Item, Variants, SplitButton, SplitButtonVariants,
};
