import React from 'react';
import Text from 'terra-text';
import classNames from 'classnames/bind';
import styles from './colors.module.scss';
import styles2 from './TextDocCommon.module.scss';

const cx = classNames.bind(styles);
const cx2 = classNames.bind(styles2);

const TextVariations = () => (
  <div>
    <Text fontSize={24} weight={200}>
      Example: Text with font-size set to&nbsp;
      <code className={cx2('code-highlight')}>24</code>
      &nbsp;and weight set to&nbsp;
      <code className={cx2('code-highlight')}>200</code>
      .
    </Text>
    <br />
    <br />
    <Text fontSize={14} colorClass={cx(['secondary'])} isItalic>
      Example: Text set to&nbsp;
      <code className={cx2('code-highlight')}>isItalic</code>
      , plus adds a consumer-created&nbsp;
      <code className={cx2('code-highlight')}>colorClass</code>
      &nbsp;and css color values (not from Terra) so it looks &ldquo;secondary.&rdquo;
    </Text>
  </div>
);

export default TextVariations;
