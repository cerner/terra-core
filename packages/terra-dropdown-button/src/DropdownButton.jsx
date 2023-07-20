import React from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import * as KeyCode from 'keycode-js';
import { injectIntl } from 'react-intl';
import DropdownButtonBase from './_DropdownButtonBase';
import styles from './DropdownButton.module.scss';
import Item from './Item';
import SplitButton, { Variants as SplitButtonVariants } from './SplitButton';

const cx = classNamesBind.bind(styles);

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
  variant: PropTypes.oneOf(['neutral', 'emphasis', 'ghost']),
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * Sets the custom properties for button.
   */
  // eslint-disable-next-line react/forbid-prop-types
  buttonAttrs: PropTypes.object,
};

const defaultProps = {
  isBlock: false,
  isCompact: false,
  isDisabled: false,
  variant: 'neutral',
  buttonAttrs: {},
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
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.state = {
      isOpen: false, isActive: false, selectText: '',
    };
  }

  handleDropdownButtonClick(event) {
    this.toggleDropDown(event);
    this.setState({ selectText: '' });
  }

  handleDropdownRequestClose(callback) {
    const onSelectCallback = typeof callback === 'function' ? callback : undefined;
    this.setState({ isOpen: false, isActive: false }, onSelectCallback);
  }

  handleKeyDown(event) {
    if (this.state.isOpen && event.keyCode === KeyCode.KEY_ESCAPE) {
      event.stopPropagation();
    }
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      // In FireFox active styles don't get applied on space
      this.setState({ isActive: true });
      /*
        Prevent the callback from being called repeatedly if the RETURN or SPACE key is held down.
        The keyDown event of native html button triggers Onclick() event on RETURN or SPACE key press.
        where holding RETURN key for longer time will call dropdownClick() event repeatedly which would cause
        the dropdown to open and close itself.
      */
      event.preventDefault();
    } else if (event.keyCode === KeyCode.KEY_TAB) {
      this.handleDropdownRequestClose();
    }
  }

  handleKeyUp(event) {
    if (event.keyCode === KeyCode.KEY_SPACE || event.keyCode === KeyCode.KEY_RETURN) {
      event.preventDefault();
      this.setState({ isActive: false });
      this.toggleDropDown(event);
    }
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

  getSelectedOptionText = (selectedOptionText) => {
    this.setState({ selectText: selectedOptionText });
  }

  handleBlur = () => {
    this.setState({ selectText: '' });
  };

  toggleDropDown(event) {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Button#Clicking_and_focus
    // Button on Firefox, Safari and IE running on OS X does not receive focus when clicked.
    // This will put focus on the button when clicked.
    event.currentTarget.focus();
  }

  render() {
    const {
      children,
      isBlock,
      isCompact,
      isDisabled,
      label,
      intl,
      variant,
      buttonAttrs,
      ...customProps
    } = this.props;

    const theme = this.context;

    const {
      isOpen, isActive, selectText,
    } = this.state;
    const selectedLabel = intl.formatMessage({ id: 'Terra.dropdownButton.selected' });
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
      theme.className,
    );

    let buttonAriaLabel = '';
    const modifiedButtonAttrs = { ...buttonAttrs };
    if (modifiedButtonAttrs && modifiedButtonAttrs['aria-label']) {
      buttonAriaLabel = modifiedButtonAttrs['aria-label'];
      delete modifiedButtonAttrs['aria-label'];
    }
    const customLabel = (selectText) ? `${selectText}, ${selectedLabel}, ${label}` : label;
    buttonAriaLabel = `${customLabel}${buttonAriaLabel ? `, ${buttonAriaLabel}` : ''}`;

    return (
      <DropdownButtonBase
        {...customProps}
        items={children}
        isOpen={isOpen}
        isBlock={isBlock}
        isCompact={isCompact}
        isDisabled={isDisabled}
        requestClose={this.handleDropdownRequestClose}
        refCallback={this.setListNode}
        buttonRef={this.getButtonNode}
        getSelectedOptionText={this.getSelectedOptionText}
      >
        <button
          {...modifiedButtonAttrs}
          type="button"
          className={classnames}
          onClick={this.handleDropdownButtonClick}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
          disabled={isDisabled}
          tabIndex={isDisabled ? '-1' : undefined}
          aria-disabled={isDisabled}
          ref={this.setButtonNode}
          aria-expanded={isOpen}
          aria-label={buttonAriaLabel}
          onBlur={this.handleBlur}
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
DropdownButton.contextType = ThemeContext;

export default injectIntl(DropdownButton);
export {
  Item, Variants, SplitButton, SplitButtonVariants,
};
