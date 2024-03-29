import React from 'react';
import Heading from 'terra-heading';
import classNames from 'classnames/bind';
import styles from 'terra-heading/lib/colors.module.scss';

const cx = classNames.bind(styles);

const HeadingColors = () => (
  <div>
    <Heading level={3} colorClass={cx(['attention'])}>{'Font Color: \'attention\' class'}</Heading>
    <Heading level={3} colorClass={cx(['success'])}>{'Font Color: \'success\' class'}</Heading>
    <Heading level={3} colorClass={cx(['info'])}>{'Font Color: \'info\' class'}</Heading>
  </div>
);

export default HeadingColors;
