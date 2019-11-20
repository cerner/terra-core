import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import * as KeyCode from 'keycode-js';
import onClickOutside from 'react-onclickoutside';
import DropdownButtonBase from './_DropdownButtonBase';
import styles from './DropdownButton.module.scss';
import Item from './Item';
import SplitButton, { Variants as SplitButtonVariants } from './SplitButton';
import Util from './_DropdownListUtil';

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
const WrappedButtonBase = onClickOutside(DropdownButtonBase);

class DropdownButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleDropdownButtonClick = this.handleDropdownButtonClick.bind(this);
    this.handleDropdownRequestClose = this.handleDropdownRequestClose.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleButtonClickOutside = this.handleButtonClickOutside.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.positionDropdown = this.positionDropdown.bind(this);
    this.alignDropdown = this.alignDropdown.bind(this);

    this.state = {
      isOpen: false, isActive: false, isKeyboardEvent: false, position: 'bottom', align: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isOpen !== this.state.isOpen) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(this.positionDropdown, !prevState.isOpen ? 0 : 100);
    }
    if (prevState.isOpen !== this.state.isOpen) {
      setTimeout(this.alignDropdown, !prevState.isOpen ? 0 : 100);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.debounceTimer);
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  handleButtonClickOutside(event) {
    event.preventDefault();
    this.setState({
      isOpen: false,
    });
  }

  handleDropdownButtonClick() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  handleDropdownRequestClose(callback) {
    this.setState({ isOpen: false }, typeof callback === 'function' ? callback : undefined);
    this.setState({ isKeyboardEvent: false });
  }

  /*
    In FireFox active styles don't get applied on space
   */
  handleKeyDown(event) {
    if (event.keyCode === KeyCode.KEY_SPACE) {
      this.setState({ isActive: true });
      this.setState({ isKeyboardEvent: true });
    }
  }

  handleKeyUp(event) {
    if (event.keyCode === KeyCode.KEY_SPACE) {
      this.setState({ isActive: false });
    }
  }

  positionDropdown() {
    if (!this.state.isOpen) {
      return;
    }
    const positionValue = Util.dropdownPosition(this.buttonNode, this.dropdown).semanticTopWhenAbove;
    if (positionValue !== this.state.position) {
      this.setState({ position: positionValue });
    }
  }

  alignDropdown() {
    if (!this.state.isOpen) {
      return;
    }
    const isAligned = ((this.dropdown.getBoundingClientRect().left + this.dropdown.getBoundingClientRect().x) > (document.body.getBoundingClientRect().right + document.body.getBoundingClientRect().x));
    if (this.state.align !== isAligned) {
      this.setState({ align: isAligned });
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

    const {
      isOpen, isActive, isKeyboardEvent, position, align,
    } = this.state;

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
      <WrappedButtonBase
        {...customProps}
        items={children}
        isOpen={isOpen}
        isBlock={isBlock}
        isCompact={isCompact}
        isDisabled={isDisabled}
        requestClose={this.handleDropdownRequestClose}
        isKeyboardEvent={isKeyboardEvent}
        buttonRef={this.getButtonNode}
        onClickOutside={this.handleButtonClickOutside}
        refCallback={(ref) => { this.dropdown = ref; }}
        position={position}
        isAligned={align}
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
      </WrappedButtonBase>
    );
  }
}

DropdownButton.propTypes = propTypes;
DropdownButton.defaultProps = defaultProps;

export default DropdownButton;
export {
  Item, Variants, SplitButton, SplitButtonVariants,
};
