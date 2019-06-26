/* eslint-disable no-alert */
import React from 'react';

import IconBookmark from 'terra-icon/lib/icon/IconTile';
import classNames from 'classnames/bind';
import Tag from '../../../Tag';
import styles from './LongTextTagTest.module.scss';

const cx = classNames.bind(styles);

const icon = <IconBookmark />;
const text = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores ';

const LongTextIconTag = () => (
  <div className={cx('long-text-tag-wrapper')}>
    {' '}
    <Tag icon={icon} text={text} id="longTextIcon" onClick={() => window.alert('Tag has been clicked!')} />
    {' '}
  </div>
);

export default LongTextIconTag;
