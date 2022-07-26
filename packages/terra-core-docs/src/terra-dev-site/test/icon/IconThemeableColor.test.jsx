import React from 'react';
import IconFeatured from 'terra-icon/lib/icon/IconFeatured';
import classNames from 'classnames/bind';
import styles from './IconAll.module.scss';

const cx = classNames.bind(styles);

const ColoringIconFill = () => (
  <div>
    <h3>Apply a themeable fill color to an Icon</h3>
    <span className={cx(['feature-icon-filled'])}><IconFeatured id="icon-featured" /></span>
  </div>
);

export default ColoringIconFill;
