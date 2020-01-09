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
    this.openDropDown = this.openDropDown.bind(this);
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

  openDropDown(event) {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Button#Clicking_and_focus
    // Button on Firefox, Safari and IE running on OS X does not receive focus when clicked.
    // This will put focus on the button when clicked.
    event.currentTarget.focus();
  }

  handleDropdownButtonClick(event) {
    if (this.state.isOpen) {
      this.setState({ openedViaKeyboard: false });
    }
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    this.openDropDown(event);
  }

  handleDropdownRequestClose(callback) {
    const onSelectCallback = typeof callback === 'function' ? callback : undefined;
    this.setState({ isOpen: false, openedViaKeyboard: false, isActive: false }, onSelectCallback);
  }

  handleKeyDown(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      // In FireFox active styles don't get applied on space
      this.setState({ isActive: true, openedViaKeyboard: true });
      /*
        Prevent the callback from being called repeatedly if the RETURN or SPACE key is held down.
        The keyDown event of native html button triggers Onclick() event on RETURN or SPACE key press.
        where holding RETURN key for longer time will call dropdownClick() event repeatedly which would cause
        the dropdown to open and close itself.
      */
      event.preventDefault();
    }
  }

  handleKeyUp(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ isActive: false });
      this.openDropDown(event);
    } else if (event.keyCode === KeyCode.KEY_DOWN && this.state.isOpen && !this.state.openedViaKeyboard) {
      // set focus to first list element on down arrow key press only when dropdown is opened by mouse click.
      const listOptions = this.dropdownList.querySelectorAll('[data-terra-dropdown-list-item]');
      listOptions[0].childNodes[0].focus();
      // prevent handleFocus() callback of DropdownList.
      // event.preventDefault();
    } else if (event.keyCode === KeyCode.KEY_UP && this.state.isOpen && !this.state.openedViaKeyboard) {
      // set focus to last list element on up arrow key press only when dropdown is opened by mouse click
      const listOptions = this.dropdownList.querySelectorAll('[data-terra-dropdown-list-item]');
      listOptions[listOptions.length - 1].focus();
      event.preventDefault();
    } else if (event.keyCode === KeyCode.KEY_TAB) {
      this.handleDropdownRequestClose();
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
