import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Dropdown from './_Dropdown';
import styles from './_DropdownButtonBase.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The button or buttons that are the primary option and caret
   */
  children: PropTypes.node.isRequired,
  /**
   * The options to display in the dropdown. Should be of type `Button`.
   */
  items: PropTypes.node.isRequired,
  /**
   * Whether or not the dropdown is open
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * Callback to tell the parent it should close the dropdown
   */
  requestClose: PropTypes.func.isRequired,
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
   * Whether or not dropdown is opened using keyboard.
   */
  openedViaKeyboard: PropTypes.bool,
  /**
   * Callback for reference of the dropdown button
   */
  buttonRef: PropTypes.func,
  /**
   * Ref callback for the dropdown list DOM element.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  isBlock: false,
  isCompact: false,
  isDisabled: false,
  openedViaKeyboard: false,
};

class DropdownButtonBase extends React.Component {
  constructor(props) {
    super(props);

    this.setButtonWrapperRef = this.setButtonWrapperRef.bind(this);
    this.getButtonWrapperRef = this.getButtonWrapperRef.bind(this);

    this.buttonWrapperRef = null;
  }

  setButtonWrapperRef(ref) {
    this.buttonWrapperRef = ref;
  }

  getButtonWrapperRef() {
    return this.buttonWrapperRef;
  }

  render() {
    const {
      children,
      items,
      isOpen,
      requestClose,
      isBlock,
      isCompact,
      isDisabled,
      openedViaKeyboard,
      buttonRef,
      refCallback,
      ...customProps
    } = this.props;

    const DropdownButtonClassNames = cx([
      'dropdown-button-base',
      { 'is-block': isBlock },
      { 'is-compact': isCompact },
      { disabled: isDisabled },
      customProps.className,
    ]);

    let calcWidth;
    if (this.buttonWrapperRef && isBlock) {
      calcWidth = `${this.buttonWrapperRef.getBoundingClientRect().width}px`;
    }

    return (
      <div
        {...customProps}
        className={DropdownButtonClassNames}
        ref={this.setButtonWrapperRef}
      >
        {children}
        <Dropdown
          targetRef={this.getButtonWrapperRef}
          isOpen={isOpen}
          requestClose={requestClose}
          width={calcWidth}
          openedViaKeyboard={openedViaKeyboard}
          buttonRef={buttonRef}
          refCallback={refCallback}
        >
          {items}
        </Dropdown>
      </div>
    );
  }
}

DropdownButtonBase.propTypes = propTypes;
DropdownButtonBase.defaultProps = defaultProps;

export default DropdownButtonBase;
