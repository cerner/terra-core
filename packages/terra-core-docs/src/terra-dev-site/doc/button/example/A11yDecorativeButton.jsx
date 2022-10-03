import React from 'react';
import DecoIconPrinter from 'terra-icon/lib/icon/decorative/IconPrinter';
import { IconButton, IconTypes } from 'terra-button';
import Card from 'terra-card';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const DecorativeIcon = <DecoIconPrinter />;

const A11yDecorativeButton = () => (
  <Card>
    <Card.Body>
      <IconButton icon={DecorativeIcon} iconType={IconTypes.INFORMATIVE} text="Print" className={cx('button')} />
    </Card.Body>
  </Card>

);

export default A11yDecorativeButton;
