import React from 'react';
import Heading from 'terra-heading';
import classNames from 'classnames/bind';
import styles from './colors.module.scss';

// You can mix and match props on the `<Heading />` component to create various heading styles.

const cx = classNames.bind(styles);

const HeadingVariations = () => (
  <div>
    <Heading level={3} colorClass={cx(['success'])} isItalic>
H3 heading with color set to
      <code>{'\'success\' class'}</code>
      {' '}
and
      <code>isItalic</code>
    </Heading>
    <Heading level={3} size="huge" weight={200}>
H3 heading with size set to
      <code>huge</code>
      {' '}
and weight set to
      <code>200</code>
    </Heading>
  </div>
);

export default HeadingVariations;
