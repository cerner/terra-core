import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Button } from '@cerner/terra-docs';
import PillList, { Pill } from 'terra-pills';
import styles from './PillListTestCommon.module.scss';

const cx = classNames.bind(styles);

const CollapsiblePillList = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleRollUpPillOnClick = () => {
    setIsCollapsed(false);
  };

  const handleButtonOnClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={cx('spacing-wrapper')}>
      <PillList
        ariaLabel="Pill Container"
        isCollapsed={isCollapsed}
        rollUpPillOnTrigger={handleRollUpPillOnClick}
        className={cx(['container', 'show-border', 'width-200'])}
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
      <Button onClick={handleButtonOnClick}>Toggle Roll Up</Button>
    </div>
  );
};

export default CollapsiblePillList;
