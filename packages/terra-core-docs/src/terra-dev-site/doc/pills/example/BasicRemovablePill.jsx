import React, { useState } from 'react';
import PillList, { Pill } from 'terra-pills';

const BasicRemovablePill = () => {
  const [isRemoved, setIsRemoved] = useState(true);

  const handleOnRemove = () => {
    setIsRemoved(false);
  };

  return (
    <PillList
      ariaLabel="Example of a Removable Pill"
    >
      {isRemoved && (
        <Pill
          label="asthma"
          onRemove={handleOnRemove}
        />
      )}
    </PillList>
  );
};

export default BasicRemovablePill;
