import React from 'react';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Divider.scss';

const cx = classNames.bind(styles);

const Divider = ({ ...customProps }) => {
  const dividerClassNames = cx([
    'divider',
    customProps.className,
  ]);

  return <hr {...customProps} className={dividerClassNames} />;
};

export default Divider;
