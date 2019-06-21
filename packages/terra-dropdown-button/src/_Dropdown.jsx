import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'terra-popup';
import DropdownList from './_DropdownList';

const propTypes = {
  handleRequestClose: PropTypes.func.isRequired,
  boundingRef: PropTypes.func,
  targetRef: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
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
