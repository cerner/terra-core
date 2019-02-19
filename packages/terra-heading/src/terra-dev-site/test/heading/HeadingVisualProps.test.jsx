import React from 'react';

import classNames from 'classnames/bind';
import styles from '../../doc/example/colors.module.scss';

import Heading from '../../../Heading';

const cx = classNames.bind(styles);

const HeadingVisualProps = () => (
  <div>
    <Heading id="heading-visual-props" level={1} size="medium" className={cx(['info'])} isItalic weight={200}>All Visual Props Set</Heading>
  </div>
);

export default HeadingVisualProps;
