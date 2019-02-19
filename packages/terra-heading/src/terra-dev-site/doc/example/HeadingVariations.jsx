import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Heading from 'terra-heading/lib/Heading';
import classNames from 'classnames/bind';
import styles from './colors.module.scss';

const cx = classNames.bind(styles);

const HeadingVariations = () => (
  <div>
    <Heading level={3} className={cx(['neutral'])} isItalic>
H3 heading with color set to
      <code>rgb(46,125,50)</code>
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
