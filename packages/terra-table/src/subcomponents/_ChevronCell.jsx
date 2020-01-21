import React from 'react';
import classNames from 'classnames/bind';
import styles from './ChevronCell.module.scss';

const cx = classNames.bind(styles);

const ChevronCell = ({
  ...customProps
}) => (
  <div
    {...customProps}
    className={customProps.className ? `${cx('cell')} ${customProps.className}` : cx('cell')}
    role="none"
  >
    <div className={cx('container')}>
      <span
        className={cx(
          'chevron',
        )}
      />
    </div>
  </div>
);

export default ChevronCell;
