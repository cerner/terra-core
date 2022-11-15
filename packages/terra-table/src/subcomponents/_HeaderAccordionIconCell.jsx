import React from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderAccordionIconCell.module.scss';

const cx = classNames.bind(styles);

const HeaderAccordionIconCell = ({
  ...customProps
}) => (
  <div
    {...customProps}
    className={customProps.className ? `${cx('cell')} ${customProps.className}` : cx('cell')}
    role="none"
  >
    <div className={cx('container')}>
      <div 
        className={cx(
          'accordion-icon',
        )} 
      />
    </div>
  </div>
);

export default HeaderAccordionIconCell;
