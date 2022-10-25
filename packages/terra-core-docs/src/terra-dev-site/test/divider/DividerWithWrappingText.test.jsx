import React from 'react';
import classNames from 'classnames/bind';
import Divider from 'terra-divider';
import styles from './DividerTestCommon.module.scss';

const cx = classNames.bind(styles);

const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ante, porta sit amet sem vitae, pellentesque pharetra ex. Etiam odio purus, maximus eget mauris in, pulvinar euismod neque. Curabitur eu vulputate leo. Etiam tincidunt lectus ut metus interdum, sit amet porttitor leo ornare. Sed tincidunt rutrum odio, dignissim rhoncus nulla finibus et. Mauris mollis posuere dolor dignissim vulputate. Sed accumsan dignissim mi id pulvinar.';

export default () => (
  <div>
    <div className={cx('separator')} />
    <Divider id="divider" text={content} />
    <div className={cx('separator')} />
    <Divider id="divider1" text={`H1: ${content}`} level={1} />
    <div className={cx('separator')} />
    <Divider id="divider2" text={`H2: ${content}`} level={2} />
    <div className={cx('separator')} />
    <Divider id="divider3" text={`H3: ${content}`} level={3} />
    <div className={cx('separator')} />
    <Divider id="divider4" text={`H4: ${content}`} level={4} />
    <div className={cx('separator')} />
    <Divider id="divider5" text={`H5: ${content}`} level={5} />
    <div className={cx('separator')} />
    <Divider id="divider6" text={`H6: ${content}`} level={6} />
    <div className={cx('separator')} />
  </div>
);
