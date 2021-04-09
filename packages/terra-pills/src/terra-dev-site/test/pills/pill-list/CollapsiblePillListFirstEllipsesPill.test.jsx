import React, { useState } from 'react';
import Button from 'terra-button';
import PillList from '../../../../PillList';
import Pill from '../../../../Pill';

const CollapsiblePillListFirstEllipsesPill = () => {
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
          label="Very Long Label which should show ellipses"
        />
        <Pill
          label="Random"
        />
      </PillList>
      <Button text="Toggle Roll Up" onClick={handleButtonOnClick} />
    </>
  );
};

export default CollapsiblePillListFirstEllipsesPill;
