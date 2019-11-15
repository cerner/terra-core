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
  isKeyboardEvent: PropTypes.bool,
  /**
   * Callback for reference of the dropdown button
   */
  buttonRef: PropTypes.func,
  onClickOutside: PropTypes.func,
  /**
   * Callback ref to pass into the dom element.
   */
  refCallback: PropTypes.func,
  /**
   * Position of the dropdown wrt the button.
   */
  position: PropTypes.string,
};

const defaultProps = {
  isBlock: false,
  isCompact: false,
  isDisabled: false,
  isKeyboardEvent: false,
  position: 'bottom',
};

class DropdownButtonBase extends React.Component {
  constructor(props) {
    super(props);

    this.setButtonWrapperRef = this.setButtonWrapperRef.bind(this);
    this.getButtonWrapperRef = this.getButtonWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.buttonWrapperRef = null;
  }

  setButtonWrapperRef(ref) {
    this.buttonWrapperRef = ref;
  }

  getButtonWrapperRef() {
    return this.buttonWrapperRef;
  }

  handleClickOutside(event) {
    this.props.onClickOutside(event);
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
      isKeyboardEvent,
      buttonRef,
      onClickOutside,
      refCallback,
      position,
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
    // Delete the unnecessary props that come from react-onClickOutside.
    delete customProps.disableOnClickOutside;
    delete customProps.enableOnClickOutside;
    delete customProps.eventTypes;
    delete customProps.excludeScrollbar;
    delete customProps.outsideClickIgnoreClass;
    delete customProps.preventDefault;
    delete customProps.stopPropagation;

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
          isKeyboardEvent={isKeyboardEvent}
          buttonRef={buttonRef}
          onClickOutside={onClickOutside}
          refCallback={refCallback}
          position={position}
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
