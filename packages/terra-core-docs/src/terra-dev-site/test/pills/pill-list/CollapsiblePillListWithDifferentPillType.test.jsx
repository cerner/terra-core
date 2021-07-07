import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Button } from '@cerner/terra-docs';
import PillList, { Pill } from 'terra-pills';
import styles from './PillListTestCommon.module.scss';

const cx = classNames.bind(styles);

const CollapsiblePillListWithDifferentPillType = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleRollUpPillOnClick = () => {
    setIsCollapsed(false);
  };

  const handleButtonOnClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleOnRemove = () => {
    // Callback just to enable remove button
  };

  const handleOnSelect = () => {
    // Callback just to make pill selectable
  };

  return (
    <>
      <PillList
        ariaLabel="Pill Container"
        isCollapsed={isCollapsed}
        rollUpPillOnTrigger={handleRollUpPillOnClick}
        className={cx(['show-border', 'width-200'])}
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
      <Button onClick={handleButtonOnClick}>Toggle Roll Up</Button>
    </>
  );
};

export default CollapsiblePillListWithDifferentPillType;
