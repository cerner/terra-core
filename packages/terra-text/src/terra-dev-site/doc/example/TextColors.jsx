import React from 'react';
import Text from 'terra-text';
import classNames from 'classnames/bind';
import styles from './colors.module.scss';

const cx = classNames.bind(styles);

const TextColors = () => (
  <div>
    <Text fontSize={18} colorClass={cx(['primary'])}>Font Color Example: &ldquo;primary&rdquo; sample consumer-created class</Text>
    <br />
    <Text fontSize={18} colorClass={cx(['secondary'])}>Font Color Example: &ldquo;secondary&rdquo; sample consumer-created class</Text>
    <br />
    <Text fontSize={18} colorClass={cx(['attention'])}>Font Color Example: &ldquo;attention&rdquo; sample consumer-created class</Text>
    <br />
    <Text fontSize={18} colorClass={cx(['result-value-unverified'])}>Font Color Example: &ldquo;result-value-unverified&rdquo; sample consumer-created class</Text>
  </div>
);

export default TextColors;
