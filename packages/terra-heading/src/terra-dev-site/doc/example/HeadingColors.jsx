import React from 'react';
import Heading from 'terra-heading';
import classNames from 'classnames/bind';
import styles from './colors.module.scss';

// eslint-disable-next-line import/order
import StylesDoc from 'terra-heading/docs/colors.doc.scss?dev-site-codeblock';

const cx = classNames.bind(styles);

const HeadingColors = () => (
  <div>
    <StylesDoc />
    <Heading level={3} colorClass={cx(['attention'])}>{'Font Color: \'attention\' class'}</Heading>
    <Heading level={3} colorClass={cx(['success'])}>{'Font Color: \'success\' class'}</Heading>
    <Heading level={3} colorClass={cx(['info'])}>{'Font Color: \'info\' class'}</Heading>
  </div>
);

export default HeadingColors;
