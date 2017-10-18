import React from 'react';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './HorizontalDivider.scss';

const cx = classNames.bind(styles);

const HorizontalDivider = () => {
  const HorizontalDividerClassNames = cx([
    'divider',
  ]);

  return (<hr className={HorizontalDividerClassNames} />);
};

export default HorizontalDivider;
