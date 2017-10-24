import React from 'react';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './HorizontalDivider.scss';

const cx = classNames.bind(styles);

const HorizontalDivider = ({ ...customProps }) => {
  const HorizontalDividerClassNames = cx([
    'divider',
    customProps.className,
  ]);

  return (<hr {...customProps} className={HorizontalDividerClassNames} />);
};

export default HorizontalDivider;
