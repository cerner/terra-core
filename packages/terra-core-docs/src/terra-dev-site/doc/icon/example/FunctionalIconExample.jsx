/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import classNames from 'classnames/bind';
import IconTile from 'terra-icon/lib/icon/IconTile';
import IconList from 'terra-icon/lib/icon/IconList';
import IconTreemap from 'terra-icon/lib/icon/IconTreemap';

import styles from './IconDocCommon.module.scss';

const cx = classNames.bind(styles);
const exampleClassName = cx('example');
const viewLinkClassName = cx('viewLink');

const FunctionalIconExample = () => (
  <div className={exampleClassName}>
    View folder as
    <a className={viewLinkClassName} href="https://example.com/" target="_blank" rel="noreferrer"><IconList /></a>
    <a className={viewLinkClassName} href="https://example.com/" target="_blank" rel="noreferrer"><IconTile /></a>
    <a className={viewLinkClassName} href="https://example.com/" target="_blank" rel="noreferrer"><IconTreemap /></a>
  </div>
);

export default FunctionalIconExample;
