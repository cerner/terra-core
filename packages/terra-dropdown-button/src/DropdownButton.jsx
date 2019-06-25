import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Dropdown from './_Dropdown';
import styles from './DropdownButton.module.scss';
import Option from './_Option';

const cx = classNames.bind(styles);

const Variants = {
  NEUTRAL: 'neutral',
  EMPHASIS: 'emphasis',
};

const Types = {
  DROPDOWN: 'dropdown',
  SPLIT: 'split',
};

const propTypes = {
  /**
   * The options to display in the dropdown. Should be of type `DropdownButton.Option`.
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
   * For 'dropdown' type sets what will be shown on the dropdown button. `callback` is ignored in the 'dropdown` type.
   *
   * For 'split' type sets what will be shown on the primary button and what pressing the primary button will do.
   */
  defaultOption: PropTypes.shape({
    label: PropTypes.string.isRequired,
    callback: PropTypes.func,
  }).isRequired,
  /**
   * Sets the styles of the component. 'emphasis' variant is only valid on the 'dropdown' type.
   * Must be either 'neutral' or 'emphasis'.
   */
  variant: PropTypes.oneOf([Variants.NEUTRAL, Variants.EMPHASIS]),
  /**
   * Sets the component to have a primary action button displayed outside the dropdown ('split') or not ('dropdown').
   * Must be either 'dropdown' or 'split'.
   */
  type: PropTypes.oneOf([Types.DROPDOWN, Types.SPLIT]),
};

const defaultProps = {
  disabled: false,
  isBlock: false,
  variant: 'neutral',
  type: 'dropdown',
};

class DropdownButton extends React.Component {
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

  renderSplitType(defaultOption, disabled) {
    return (
      <React.Fragment>
        <button
          type="button"
          className={cx('split-button-primary')}
          onClick={defaultOption.callback}
          disabled={disabled}
          tabIndex={disabled ? '-1' : undefined}
          aria-disabled={disabled}
        >
          {defaultOption.label}
        </button>
        <button
          type="button"
          onClick={this.handleDropdownButtonClick}
          className={cx('split-button-chevron', { 'is-active': this.state.isOpen })}
          disabled={disabled}
          tabIndex={disabled ? '-1' : undefined}
          aria-disabled={disabled}
          aria-expanded={this.state.isOpen || undefined}
          aria-haspopup
          aria-label="More Options"
        >
          <span className={cx('chevron-icon')} />
        </button>
      </React.Fragment>
    );
  }

  renderDropdownType(defaultOption, disabled) {
    return (
      <button
        type="button"
        className={cx('dropdown-button-type', { 'is-active': this.state.isOpen })}
        onClick={this.handleDropdownButtonClick}
        disabled={disabled}
        tabIndex={disabled ? '-1' : undefined}
        aria-disabled={disabled}
        aria-expanded={this.state.isOpen || undefined}
        aria-haspopup
      >
        <span className={cx('dropdown-button-type-text')}>{defaultOption.label}</span>
        <span className={cx('chevron-icon')} />
      </button>
    );
  }

  render() {
    const {
      children,
      disabled,
      isBlock,
      defaultOption,
      variant,
      type,
      ...customProps
    } = this.props;

    const isDropdownType = type === 'dropdown';

    const DropdownButtonClassNames = cx([
      'dropdown-button',
      isDropdownType ? variant : 'neutral',
      { 'is-block': isBlock },
      { disabled },
      customProps.className,
    ]);

    return (
      <div
        {...customProps}
        className={DropdownButtonClassNames}
        ref={(ref) => { this.buttonWrapperRef = ref; }}
      >
        {(isDropdownType && this.renderDropdownType(defaultOption, disabled)) || this.renderSplitType(defaultOption, disabled)}
        <Dropdown
          targetRef={() => this.buttonWrapperRef}
          isOpen={this.state.isOpen}
          requestClose={this.handleDropdownRequestClose}
          width={(this.buttonWrapperRef && isBlock) ? `${this.buttonWrapperRef.offsetWidth}px` : undefined}
        >
          {children}
        </Dropdown>
      </div>
    );
  }
}

DropdownButton.Option = Option;

DropdownButton.propTypes = propTypes;
DropdownButton.defaultProps = defaultProps;

export default DropdownButton;
export { Variants, Types };
