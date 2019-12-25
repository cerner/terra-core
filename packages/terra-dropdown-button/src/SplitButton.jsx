import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import * as KeyCode from 'keycode-js';
import { injectIntl, intlShape } from 'react-intl';
import DropdownButtonBase from './_DropdownButtonBase';
import styles from './SplitButton.module.scss';
import Item from './Item';

const cx = classNames.bind(styles);

const Variants = {
  NEUTRAL: 'neutral',
  // EMPHASIS: 'emphasis', // Wait to add in future enhancement
  GHOST: 'ghost',
};

const propTypes = {
  /**
   * The options to display in the dropdown. Should be comprised of the subcomponent `Item`.
   */
  children: PropTypes.node.isRequired,
  /**
   * Determines whether the component should have block styles applied. The dropdown will match the component's width.
   */
  isBlock: PropTypes.bool,
  /**
   * Whether or not the button has reduced padding for use in tables and single-row lists.
   */
  isCompact: PropTypes.bool,
  /**
   * Determines whether the primary button and expanding the dropdown should be disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Sets the text that will be shown on the primary button which is outside the dropdown.
   */
  primaryOptionLabel: PropTypes.string.isRequired,
  /**
   * What will be called when the primary button is pressed.
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Sets the styles of the component, one of `neutral`, or `ghost`.
   */
  variant: PropTypes.oneOf(Object.values(Variants)),
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: intlShape.isRequired,
  /**
   * @private
   * Callback to tell the parent it should close the dropdown
   */
  requestClose: PropTypes.func,
  /**
   *  @private
   * The associated metaData to be provided in the onSelect callback.
   */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
};

const defaultProps = {
  isBlock: false,
  isCompact: false,
  isDisabled: false,
  variant: 'neutral',
};

class SplitButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleDropdownButtonClick = this.handleDropdownButtonClick.bind(this);
    this.handlePrimaryButtonClick = this.handlePrimaryButtonClick.bind(this);
    this.handleDropdownRequestClose = this.handleDropdownRequestClose.bind(this);
    this.handlePrimaryKeyDown = this.handlePrimaryKeyDown.bind(this);
    this.handlePrimaryKeyUp = this.handlePrimaryKeyUp.bind(this);
    this.handleCaretKeyDown = this.handleCaretKeyDown.bind(this);
    this.handleCaretKeyUp = this.handleCaretKeyUp.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.setListNode = this.setListNode.bind(this);

    this.state = {
      isOpen: false, caretIsActive: false, primaryIsActive: false, openedViaKeyboard: false,
    };
  }

  setListNode(element) {
    this.dropdownList = element;
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  handleDropdownButtonClick(event) {
    if (this.state.isOpen) {
      this.setState({ openedViaKeyboard: false });
    }
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Button#Clicking_and_focus
    // Button on Firefox, Safari and IE running on OS X does not receive focus when clicked.
    // This will put focus on the button when clicked.
    event.currentTarget.focus();
  }

  handlePrimaryButtonClick(event) {
    event.stopPropagation();
    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Button#Clicking_and_focus
    // Button on Firefox, Safari and IE running on OS X does not receive focus when clicked.
    // This will put focus on the button when clicked.
    event.currentTarget.focus();
    this.props.onSelect(event, this.props.metaData);
    this.handleDropdownRequestClose();
  }

  handleDropdownRequestClose(callback) {
    const callbackOnRequestClose = typeof callback === 'function' ? callback : undefined;
    this.setState({ isOpen: false, openedViaKeyboard: false, caretIsActive: false }, callbackOnRequestClose);
  }

  /*
    In FireFox active styles don't get applied onKeyDown
   */
  handlePrimaryKeyDown(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ primaryIsActive: true });
    }
  }

  handlePrimaryKeyUp(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ primaryIsActive: false });
    }
  }

  handleCaretKeyDown(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ caretIsActive: true });
      this.setState({ openedViaKeyboard: true });
    } else if (event.keyCode === KeyCode.KEY_DOWN && this.state.isOpen && !this.state.openedViaKeyboard) {
      // puts focus on first list element on down arrow key press when dropdown is opened by mouse click
      const firstOption = this.dropdownList.querySelector('[data-terra-dropdown-first-list-item]');
      firstOption.focus();
    } else if (event.keyCode === KeyCode.KEY_UP && this.state.isOpen && !this.state.openedViaKeyboard) {
      // puts focus on last list element on up arrow key press when dropdown is opened by mouse click
      const lastOption = this.dropdownList.querySelector('[data-terra-dropdown-last-list-item]');
      lastOption.focus();
    }
  }

  handleCaretKeyUp(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ caretIsActive: false });
    }
  }

  render() {
    const {
      children,
      isBlock,
      isCompact,
      isDisabled,
      primaryOptionLabel,
      onSelect,
      variant,
      intl,
      requestClose,
      metaData,
      ...customProps
    } = this.props;

    const {
      isOpen,
      primaryIsActive,
      caretIsActive,
      openedViaKeyboard,
    } = this.state;

    const caretLabel = intl.formatMessage({ id: 'Terra.dropdownButton.moreOptions' });

    const primaryClassnames = cx(
      'split-button-primary',
      variant,
      { 'is-block': isBlock },
      { 'is-compact': isCompact },
      { 'is-active': primaryIsActive },
    );
    const caretClassnames = cx(
      'split-button-caret',
      variant,
      { 'is-compact': isCompact },
      { 'is-active': isOpen || caretIsActive },
      /* This needs to match terra-hookshot's react-onclickoutside ignore classname or clicking the caret with
        the dropdown open will cause the dropdown to close and reopen
      */
      { 'ignore-react-onclickoutside': isOpen },
    );

    return (
      <DropdownButtonBase
        {...customProps}
        items={children}
        isOpen={isOpen}
        requestClose={this.handleDropdownRequestClose}
        isBlock={isBlock}
        isCompact={isCompact}
        isDisabled={isDisabled}
        openedViaKeyboard={openedViaKeyboard}
        buttonRef={this.getButtonNode}
        refCallback={this.setListNode}
      >
        <button
          type="button"
          className={primaryClassnames}
          onClick={this.handlePrimaryButtonClick}
          onKeyDown={this.handlePrimaryKeyDown}
          onKeyUp={this.handlePrimaryKeyUp}
          disabled={isDisabled}
          tabIndex={isDisabled ? '-1' : undefined}
          aria-disabled={isDisabled}
        >
          {primaryOptionLabel}
        </button>
        <button
          type="button"
          onClick={this.handleDropdownButtonClick}
          onKeyDown={this.handleCaretKeyDown}
          onKeyUp={this.handleCaretKeyUp}
          className={caretClassnames}
          disabled={isDisabled}
          tabIndex={isDisabled ? '-1' : undefined}
          aria-disabled={isDisabled}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          aria-label={caretLabel}
          ref={this.setButtonNode}
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
export { Item, Variants };
