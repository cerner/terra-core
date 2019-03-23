import React from 'react';
import classNames from 'classnames/bind';
import styles from './Divider.module.scss';

const cx = classNames.bind(styles);

const Divider = ({ ...customProps }) => {
  const dividerClassNames = cx([
    'divider',
    customProps.className,
  ]);

  return <hr {...customProps} className={dividerClassNames} aria-hidden="true" />;
};

export default Divider;
