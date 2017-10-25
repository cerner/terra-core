import React from 'react';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './HorizontalDivider.scss';

const cx = classNames.bind(styles);

const horizontalDivider = ({ ...customProps }) => {
  const horizontalDividerClassNames = cx([
    'divider',
    customProps.className,
  ]);

  return <hr {...customProps} className={horizontalDividerClassNames} />;
};

export default horizontalDivider;
