import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Pill } from 'terra-pills';
import styles from '../pill-list/PillListTestCommon.module.scss';

const cx = classNames.bind(styles);

const BasicRemovablePill = () => {
  const [isRemoved, setIsRemoved] = useState(true);

  const handleOnRemove = () => {
    setIsRemoved(false);
  };

  return (
    <div className={cx('spacing-wrapper')}>
      {isRemoved && (
        <Pill
          label="Label"
          onRemove={handleOnRemove}
        />
      )}
    </div>
  );
};

export default BasicRemovablePill;
