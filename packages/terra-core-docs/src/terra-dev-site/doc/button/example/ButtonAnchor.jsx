import React from 'react';
import AnchorButton from 'terra-button/lib/variants/_AnchorButton';

import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const ButtonAnchor = () => (
  <AnchorButton href="#" text="I am rendered with an anchor tag" className={cx('button')} />
);

export default ButtonAnchor;
