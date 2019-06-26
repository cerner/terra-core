/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Arrange from 'terra-arrange';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Status from 'terra-status/lib/Status';
import placeholderPic150x150 from 'terra-status/lib/terra-dev-site/doc/example/150x150.jpg';
import classNames from 'classnames/bind';
import styles from './colors.module.scss';

const cx = classNames.bind(styles);
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const image = <img className={cx('image-wrapper')} height="150" width="150" src={placeholderPic150x150} alt="placeholder" />;
const simpleText = <div className={cx('text-wrapper')}>Sample text</div>;

const StatusArrange = () => (
  <div>
    <Status colorClass={cx(['attention'])} visuallyHiddenText="Status Attention">
      <Arrange fitStart={image} fill={simpleText} alignFill="center" />
    </Status>
  </div>
);

export default StatusArrange;
