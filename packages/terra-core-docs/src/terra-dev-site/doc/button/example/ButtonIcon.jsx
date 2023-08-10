import React, { useState } from 'react';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const InformativeIcon = <IconEdit a11yLabel="Edit Icon" />;
const DecorativeIcon = <IconEdit />;

const ButtonIcon = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <div>
      <Button icon={InformativeIcon} text="Informative icon" className={cx('button')} onClick={() => setDisabled(!disabled)} />
      <Button icon={DecorativeIcon} text="Decorative icon" isReversed className={cx('button')} isDisabled={disabled} />
      <Button icon={DecorativeIcon} isIconOnly text="Decorative Icon Only Button" className={cx('button')} />
      <Button icon={InformativeIcon} isIconOnly text="Informative Icon Only Button" className={cx('button')} />
    </div>
  );
};

export default ButtonIcon;
