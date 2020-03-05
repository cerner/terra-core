import React from 'react';
import Text from 'terra-text';
import classNames from 'classnames/bind';
import styles from './colors.module.scss';

// :root {
//   --my-app-text-attention-color: rgb(220, 20, 60);
//   --my-app-text-success-color: rgb(46, 125, 50);
//   --my-app-text-info-color: #304ffe;
//   --my-app-text-default-color: #333;
// }

// .default {
//   color: var(--my-app-text-default-color, #333);
// }

// .attention {
//   color: var(--my-app-text-attention-color, rgb(220, 20, 60));
// }

// .success {
//   color: var(--my-app-text-success-color, rgb(46, 125, 50));
// }

// .info {
//   color: var(--my-app-text-info-color, #304ffe);
// }

const cx = classNames.bind(styles);

const TextColors = () => (
  <div>
    <Text fontSize={18}>{'Font Color: \'default\' class'}</Text>
    <br />
    <Text fontSize={18} colorClass={cx(['attention'])}>{'Font Color: \'attention\' class'}</Text>
    <br />
    <Text fontSize={18} colorClass={cx(['success'])}>{'Font Color: \'success\' class'}</Text>
    <br />
    <Text fontSize={18} colorClass={cx(['info'])}>{'Font Color: \'info\' class'}</Text>
  </div>
);

export default TextColors;
