import React from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import classNames from 'classnames/bind';
import DropdownList from './_DropdownList';
import styles from './_Dropdown.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Callback to tell the parent it should close the dropdown
   */
  requestClose: PropTypes.func.isRequired,
  /**
   * Whether or not the dropdown should be open
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * The Options that should be displayed in the dropdown
   */
  children: PropTypes.node.isRequired,
  /**
   * @private
   * Width to set the dropdown to. Used when `isBlock` is true. Unset means to autosize.
   */
  width: PropTypes.string,
  /**
   * Whether or not dropdown is opened using keyboard.
   */
  isKeyboardEvent: PropTypes.bool,
  /**
   * Callback for reference of the dropdown button
   */
  buttonRef: PropTypes.func,
  /**
   * Callback ref to pass into the dom element.
   */
  refCallback: PropTypes.func,
  /**
   * Position of the dropdown wrt the button.
   */
  position: PropTypes.string,
  /**
   * Whether or not the dropdown in aligned right.
   */
  isAligned: PropTypes.bool,
};
const Dropdown = ({
  requestClose, isOpen, children, width, isKeyboardEvent, buttonRef, refCallback, position, isAligned,
}) => {
  let val = '';
  if (position === 'top') {
    val = true;
  }
  const dropdownClasses = cx([
    'dropdown',
    val ? 'dropdown-top' : 'dropdown-bottom',
    isAligned ? 'dropdown-right' : 'dropdown-left',
  ]);
  if (isOpen) {
    return (
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions
        className={dropdownClasses}
        ref={refCallback}
      >
        <FocusTrap focusTrapOptions={{ returnFocusOnDeactivate: true, initialFocus: isKeyboardEvent ? '' : buttonRef, clickOutsideDeactivates: true }}>
          <DropdownList
            requestClose={requestClose}
            width={width}
            onClickOutside={requestClose}
          >
            {children}
          </DropdownList>
        </FocusTrap>
      </div>
    );
  }
  return null;
};

Dropdown.propTypes = propTypes;

export default Dropdown;
