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
    this.state = { isOpen: false, isActive: false, isKeyboardEvent: false };
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

  handleDropdownButtonClick() {
    if (this.state.isOpen) {
      this.setState({ isKeyboardEvent: false });
    }
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  handleDropdownRequestClose(callback) {
    this.setState({ isOpen: false }, typeof callback === 'function' ? callback : undefined);
    this.setState({ isKeyboardEvent: false, isActive: false });
  }

  /*
    In FireFox active styles don't get applied on space
   */
  handleKeyDown(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ isActive: true });
      this.setState({ isKeyboardEvent: true });
    } else if (event.keyCode === KeyCode.KEY_DOWN && this.state.isOpen && !this.state.isKeyboardEvent) {
      // puts focus on first list element on down arrow key press when dropdown is opened by mouse click
      // the div inside the li is what is actually focusable so need to go 2 layers down
      this.dropdownList.childNodes[0].childNodes[0].focus();
    } else if (event.keyCode === KeyCode.KEY_UP && this.state.isOpen && !this.state.isKeyboardEvent) {
      // puts focus on last list element on up arrow key press when dropdown is opened by mouse click
      // the div inside the li is what is actually focusable so need to go 2 layers down
      const lastItemIndex = this.dropdownList.childNodes.length - 1;
      this.dropdownList.childNodes[lastItemIndex].childNodes[0].focus();
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

    const { isOpen, isActive, isKeyboardEvent } = this.state;

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
        isKeyboardEvent={isKeyboardEvent}
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
          tabIndex={isDisabled ? '-1' : '0'}
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
