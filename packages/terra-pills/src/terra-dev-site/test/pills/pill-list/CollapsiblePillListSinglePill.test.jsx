import React, { useState } from 'react';
import Button from 'terra-button';
import PillList from '../../../../PillList';
import Pill from '../../../../Pill';

const CollapsiblePillListSinglePill = () => {
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
          label="Demo"
        />
      </PillList>
      <Button text="Toggle Roll Up" onClick={handleButtonOnClick} />
    </>
  );
};

export default CollapsiblePillListSinglePill;
