import React, { useState } from 'react';
import Button from 'terra-button';
import PillList from '../../../../PillList';
import Pill from '../../../../Pill';

const CollapsiblePillListVariedPillLabel = () => {
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
        <Pill
          label="Long Label"
        />
        <Pill
          label="Very Long Label"
        />
        <Pill
          label="Very Long Label which should show ellipses"
        />
        <Pill
          label="Random"
        />
        <Pill
          label="Random 2"
        />
      </PillList>
      <Button text="Toggle Roll Up" onClick={handleButtonOnClick} />
    </>
  );
};

export default CollapsiblePillListVariedPillLabel;
