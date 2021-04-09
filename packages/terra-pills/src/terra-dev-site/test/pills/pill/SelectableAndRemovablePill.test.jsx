import React, { useState } from 'react';
import Pill from '../../../../Pill';

const SelectableAndRemovablePill = () => {
  const [isRemoved, setIsRemoved] = useState(true);

  const handleOnRemove = () => {
    setIsRemoved(false);
  };

  const handleOnSelect = () => {
    // Callback just to make pill selectable
  };

  return (
    <div>
      {isRemoved && (
        <Pill
          label="Demo"
          onSelect={handleOnSelect}
          onRemove={handleOnRemove}
        />
      )}
    </div>
  );
};

export default SelectableAndRemovablePill;
