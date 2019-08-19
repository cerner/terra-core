/* eslint-disable no-alert */
import React from 'react';
import Dialog from 'terra-dialog';
import classNames from 'classnames/bind';
import styles from './DialogDocCommon.module.scss';

const cx = classNames.bind(styles);

const header = 'Header Stuff';

const footer = (
  <div>
    <span>Footer Stuff</span>
    <span>Footer Stuff</span>
    <span>Footer Stuff</span>
    <span>Footer Stuff</span>
    <span>Footer Stuff</span>
  </div>
);

const body = (
  <div>
    <p>This is my body content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
    <p>This is some more content.</p>
  </div>
);

const DialogLongContent = () => (
  <div className={cx('dialog-wrapper')}>
    <Dialog header={header} footer={footer} onClose={() => alert('Close')}>
      {body}
    </Dialog>
  </div>
);

export default DialogLongContent;
/* eslint-enable no-alert */
