import React from 'react';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import Button, { IconTypes } from 'terra-button';
import Card from 'terra-card';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const Icon = <IconPrinter a11yLabel="Print" />;
const DecorativeIcon = <IconPrinter />;

const A11yIconButton = () => (
  <Card>
    <Card.Body>
      <Button icon={Icon} isIconOnly iconType={IconTypes.INFORMATIVE} className={cx('button')} />
      <Button icon={Icon} text="All Documents" iconType={IconTypes.INFORMATIVE} className={cx('button')} />
      <Button icon={DecorativeIcon} iconType={IconTypes.DECORATIVE} text="Print" className={cx('button')} />
    </Card.Body>
  </Card>
);

export default A11yIconButton;
