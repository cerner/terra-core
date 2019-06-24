import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'terra-popup';
import DropdownList from './_DropdownList';

const propTypes = {
  /**
   * Callback to tell the parent it should close the dropdown
   */
  handleRequestClose: PropTypes.func.isRequired,
  /**
   * Ref to bound the dropdown within
   */
  boundingRef: PropTypes.func,
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
   * Sets the dropdown to the specified width. Must be in pixels and include 'px'.
   * If unset the dropdown will be automatically sized.
   */
  width: PropTypes.string,
};

const Dropdown = ({
  handleRequestClose, boundingRef, isOpen, targetRef, children, width,
}) => (
  <Popup
    boundingRef={boundingRef}
    contentHeight="auto"
    contentWidth="auto"
    isHeaderDisabled
    isOpen={isOpen}
    onRequestClose={handleRequestClose}
    targetRef={targetRef}
    contentAttachment="top left"
    // isContentFocusDisabled
  >
    <DropdownList
      handleRequestClose={handleRequestClose}
      width={width}
    >
      {children}
    </DropdownList>
  </Popup>
);

Dropdown.propTypes = propTypes;

export default Dropdown;
