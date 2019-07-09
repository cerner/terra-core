import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import KeyCode from 'keycode-js';
import { injectIntl, intlShape } from 'react-intl';
import DropdownButtonBase from './_DropdownButtonBase';
import styles from './SplitButton.module.scss';
import Button from './Button';

const cx = classNames.bind(styles);

const Variants = {
  NEUTRAL: 'neutral',
  GHOST: 'ghost',
};

const propTypes = {
  /**
   * The options to display in the dropdown. Should be comprised of the subcomponent `Button`.
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
   * Sets the styles of the component.  The default is 'neutral'. Must be either 'neutral' or 'ghost'.
   */
  variant: PropTypes.oneOf(Object.values(Variants)),
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: intlShape.isRequired,
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
    this.handleCaretKeyDown = this.handleCaretKeyDown.bind(this);
    this.handleCaretKeyUp = this.handleCaretKeyUp.bind(this);

    this.state = { isOpen: false, caretActive: false, primaryActive: false };
  }

  handleDropdownButtonClick() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  handleDropdownRequestClose() {
    this.setState({ isOpen: false });
  }

  /*
    In FireFox active styles don't get applied onKeyDown
   */
  handlePrimaryKeyDown(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ primaryActive: true });
    }
  }

  handlePrimaryKeyUp(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ primaryActive: false });
    }
  }

  handleCaretKeyDown(event) {
    if (event.keyCode === KeyCode.KEY_SPACE) {
      this.setState({ caretActive: true });
    }
  }

  handleCaretKeyUp(event) {
    if (event.keyCode === KeyCode.KEY_SPACE) {
      this.setState({ caretActive: false });
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
      intl,
      ...customProps
    } = this.props;

    const {
      isOpen,
      primaryActive,
      caretActive,
    } = this.state;

    const caretLabel = intl.formatMessage({ id: 'Terra.dropdownButton.moreOptions' });

    const primaryClassnames = cx(
      'split-button-primary',
      variant,
      { 'is-block': isBlock },
      { 'is-active': primaryActive },
    );
    const caretClassnames = cx(
      'split-button-caret',
      variant,
      { 'is-active': isOpen || caretActive },
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
          className={primaryClassnames}
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
          onKeyDown={this.handleCaretKeyDown}
          onKeyUp={this.handleCaretKeyUp}
          className={caretClassnames}
          disabled={disabled}
          tabIndex={disabled ? '-1' : undefined}
          aria-disabled={disabled}
          aria-expanded={isOpen || undefined}
          aria-haspopup
          aria-label={caretLabel}
        >
          <span className={cx('caret-icon')} />
        </button>
      </DropdownButtonBase>
    );
  }
}

SplitButton.propTypes = propTypes;
SplitButton.defaultProps = defaultProps;

export default injectIntl(SplitButton);
export { Button, Variants };
