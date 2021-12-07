import React from 'react';
import classNames from 'classnames/bind';
import Heading from 'terra-heading';
import styles from 'terra-heading/lib/colors.module.scss';

const cx = classNames.bind(styles);

const HeadingVisualProps = () => (
  <div>
    <Heading id="heading-visual-props" level={1} size="medium" colorClass={cx(['info'])} isItalic weight={200}>All Visual Props Set</Heading>
  </div>
);

export default HeadingVisualProps;
