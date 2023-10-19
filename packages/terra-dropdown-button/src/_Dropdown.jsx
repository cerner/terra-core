import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import Hookshot from 'terra-hookshot';
import DropdownList from './_DropdownList';

const propTypes = {
  /**
   * Callback to tell the parent it should close the dropdown
   */
  requestClose: PropTypes.func.isRequired,
  /**
   * Ref to attach the dropdown to
   */
  targetRef: PropTypes.func.isRequired,
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
   * Ref callback for the dropdown list DOM element.
   */
  refCallback: PropTypes.func,
  /**
   * Callback for reference of the dropdown button
   */
  buttonRef: PropTypes.func,
  /**
   * Callback for the dropdown list selected option.
   */
  getSelectedOptionText: PropTypes.func,
};

const Dropdown = ({
  requestClose, isOpen, targetRef, children, width, refCallback, buttonRef, getSelectedOptionText, ...customProps
}) => {
  const buttonFocused = useRef(false);
  const { menuId, buttonId } = customProps;
  useEffect(() => {
    // added this change to bring focus back to button when dropdown list is closed.
    if (buttonFocused.current && buttonRef) {
      buttonFocused.current = false;
      buttonRef().focus();
    }
  }, [isOpen, buttonRef]);

  const handleClose = () => {
    buttonFocused.current = true;
    requestClose();
  };

  return (
    <Hookshot
      isOpen={isOpen}
      isEnabled
      targetRef={targetRef}
      attachmentBehavior="flip"
      contentAttachment={{ vertical: 'top', horizontal: 'start' }}
      targetAttachment={{ vertical: 'bottom', horizontal: 'start' }}
    >
      <Hookshot.Content
        onEsc={requestClose}
        onOutsideClick={handleClose}
      >
        <FocusTrap focusTrapOptions={{ returnFocusOnDeactivate: true, clickOutsideDeactivates: true }}>
          <DropdownList
            requestClose={requestClose}
            width={width}
            refCallback={refCallback}
            getSelectedOptionText={getSelectedOptionText}
            menuId={menuId}
            buttonId={buttonId}
          >
            {children}
          </DropdownList>
        </FocusTrap>
      </Hookshot.Content>
    </Hookshot>
  );
};
Dropdown.propTypes = propTypes;

export default Dropdown;
