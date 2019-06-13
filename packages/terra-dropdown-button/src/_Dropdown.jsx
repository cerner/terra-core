import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'terra-popup';
import DropdownList from './_DropdownList';

const propTypes = {
  handleRequestClose: PropTypes.func.isRequired,
  boundingRef: PropTypes.func,
  targetRef: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
  })).isRequired,
  itemSelectedCallback: PropTypes.func.isRequired,
};

const Dropdown = ({
  handleRequestClose, boundingRef, isOpen, targetRef, options, itemSelectedCallback,
}) => (
  <Popup
    boundingRef={boundingRef}
    contentHeight="auto"
    contentWidth="auto"
    isHeaderDisabled
    isOpen={isOpen}
    onRequestClose={handleRequestClose}
    targetRef={targetRef}
    isContentFocusDisabled
  >
    <DropdownList
      options={options}
      handleRequestClose={handleRequestClose}
      itemSelectedCallback={itemSelectedCallback}
    />
  </Popup>
);

Dropdown.propTypes = propTypes;

export default Dropdown;
