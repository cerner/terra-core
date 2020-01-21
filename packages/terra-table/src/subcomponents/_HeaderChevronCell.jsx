import React from 'react';
import classNames from 'classnames/bind';
import styles from './HeaderChevronCell.module.scss';

const cx = classNames.bind(styles);

const HeaderChevronCell = ({
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
          'chevron',
        )}
      />
    </div>
  </div>
);

export default HeaderChevronCell;
