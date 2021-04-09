import React from 'react';
import PillList from '../../../../PillList';
import Pill from '../../../../Pill';

const BasicPillListWithDifferentPillType = () => {
  const handleOnRemove = () => {
    // Callback just to enable remove button
  };

  const handleOnSelect = () => {
    // Callback just to make pill selectable
  };

  return (
    <PillList
      ariaLabel="Pill Container"
    >
      <Pill
        label="Basic 1"
      />
      <Pill
        label="Removable"
        onRemove={handleOnRemove}
      />
      <Pill
        label="Popup"
        onSelect={handleOnSelect}
      />
      <Pill
        label="Removable and Popup"
        onSelect={handleOnSelect}
        onRemove={handleOnRemove}
      />
      <Pill
        label="Basic 2"
      />
    </PillList>
  );
};

export default BasicPillListWithDifferentPillType;
