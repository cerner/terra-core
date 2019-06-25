import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'terra-popup';
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
};

const Dropdown = ({
  requestClose, isOpen, targetRef, children, width,
}) => (
  <Popup
    contentHeight="auto"
    contentWidth="auto"
    isHeaderDisabled
    isOpen={isOpen}
    onRequestClose={requestClose}
    targetRef={targetRef}
    contentAttachment="top left"
    attachmentBehavior="flip"
    // isContentFocusDisabled
  >
    <DropdownList
      requestClose={requestClose}
      width={width}
    >
      {children}
    </DropdownList>
  </Popup>
);

Dropdown.propTypes = propTypes;

export default Dropdown;
