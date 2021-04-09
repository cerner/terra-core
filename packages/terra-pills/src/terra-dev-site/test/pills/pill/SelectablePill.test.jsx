import React from 'react';
import Pill from '../../../../Pill';

const SelectablePill = () => {
  const handleOnSelect = () => {
    // Callback just to make pill selectable
  };

  return (
    <Pill
      label="Demo"
      onSelect={handleOnSelect}
    />
  );
};

export default SelectablePill;
