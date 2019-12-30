import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import * as KeyCode from 'keycode-js';
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
   * Determines whether the button should have block styling applied. The dropdown list will match the component's width.
   */
  isBlock: PropTypes.bool,
  /**
   * Whether or not the button has reduced padding for use in tables and single-row lists.
   */
  isCompact: PropTypes.bool,
  /**
   * Determines whether the button should be disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Sets the text that will be shown on the dropdown button.
   */
  label: PropTypes.string.isRequired,
  /**
   * Sets the styles of the component, one of `neutral`, `emphasis`, or `ghost`.
   */
  variant: PropTypes.oneOf(Object.values(Variants)),
};

const defaultProps = {
  isBlock: false,
  isCompact: false,
  isDisabled: false,
  variant: 'neutral',
};

class DropdownButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleDropdownButtonClick = this.handleDropdownButtonClick.bind(this);
    this.handleDropdownRequestClose = this.handleDropdownRequestClose.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.setListNode = this.setListNode.bind(this);
    this.state = { isOpen: false, isActive: false, openedViaKeyboard: false };
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

  handleDropdownRequestClose(callback) {
    const onSelectCallback = typeof callback === 'function' ? callback : undefined;
    this.setState({ isOpen: false, openedViaKeyboard: false, isActive: false }, onSelectCallback);
  }

  handleKeyDown(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      // In FireFox active styles don't get applied on space
      this.setState({ isActive: true, openedViaKeyboard: true });
    } else if (event.keyCode === KeyCode.KEY_DOWN && this.state.isOpen && !this.state.openedViaKeyboard) {
      // puts focus on first list element on down arrow key press when dropdown is opened by mouse click
      const firstOption = this.dropdownList.querySelector('[data-terra-dropdown-first-list-item]');
      firstOption.focus();
    } else if (event.keyCode === KeyCode.KEY_UP && this.state.isOpen && !this.state.openedViaKeyboard) {
      // puts focus on last list element on up arrow key press when dropdown is opened by mouse click
      const lastOption = this.dropdownList.querySelector('[data-terra-dropdown-last-list-item]');
      lastOption.focus();
    } else if (event.keyCode === KeyCode.KEY_TAB && this.state.isOpen && !this.state.openedViaKeyboard) {
      // when multiple dropdown buttons are used in same page tab order of dropdown button gets precedence over list item
      // hence we need handle TAB Key down manually to set focus on first item in list
      const firstOption = this.dropdownList.querySelector('[data-terra-dropdown-first-list-item]');
      firstOption.focus();
      // required to prevent default focus callback that triggers on TAB key press in DropdownList.
      event.preventDefault();
    }
  }

  handleKeyUp(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ isActive: false });
    }
  }

  render() {
    const {
      children,
      isBlock,
      isCompact,
      isDisabled,
      label,
      variant,
      ...customProps
    } = this.props;

    const { isOpen, isActive, openedViaKeyboard } = this.state;

    const classnames = cx(
      'dropdown-button',
      variant,
      { 'is-active': isOpen || isActive },
      { 'is-block': isBlock },
      { 'is-compact': isCompact },
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
        isBlock={isBlock}
        isCompact={isCompact}
        isDisabled={isDisabled}
        requestClose={this.handleDropdownRequestClose}
        openedViaKeyboard={openedViaKeyboard}
        buttonRef={this.getButtonNode}
        refCallback={this.setListNode}
      >
        <button
          type="button"
          className={classnames}
          onClick={this.handleDropdownButtonClick}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
          disabled={isDisabled}
          tabIndex={isDisabled ? '-1' : undefined}
          aria-disabled={isDisabled}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          ref={this.setButtonNode}
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
