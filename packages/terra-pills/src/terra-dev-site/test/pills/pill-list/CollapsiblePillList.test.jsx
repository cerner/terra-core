import React, { useState } from 'react';
import Button from 'terra-button';
import PillList from '../../../../PillList';
import Pill from '../../../../Pill';

const CollapsiblePillList = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleRollUpPillOnClick = () => {
    setIsCollapsed(false);
  };

  const handleButtonOnClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <PillList
        ariaLabel="Pill Container"
        isCollapsed={isCollapsed}
        rollUpPillOnClick={handleRollUpPillOnClick}
      >
        <Pill
          label="Demo 1"
        />
        <Pill
          label="Demo 2"
        />
        <Pill
          label="Demo 3"
        />
        <Pill
          label="Demo 4"
        />
        <Pill
          label="Demo 5"
        />
      </PillList>
      <Button text="Toggle Roll Up" onClick={handleButtonOnClick} />
    </>
  );
};

export default CollapsiblePillList;
