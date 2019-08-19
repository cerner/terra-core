import React from 'react';
import Dialog from 'terra-dialog';
import classNames from 'classnames/bind';
import styles from './DialogDocCommon.module.scss';

const cx = classNames.bind(styles);

const header = 'Header Stuff';

const footer = <span>Footer Stuff</span>;

const body = (
  <div>
    <p>This is my body content.</p>
    <p>This is some more content.</p>
  </div>
);

const DialogNoClose = () => (
  <div className={cx('dialog-wrapper')}>
    <Dialog header={header} footer={footer}>
      {body}
    </Dialog>
  </div>
);

export default DialogNoClose;
