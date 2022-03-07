import React from 'react';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import Button from 'terra-button/lib/Button';
import classNames from 'classnames/bind';
import styles from './IconDocCommon.module.scss';

const cx = classNames.bind(styles);

const Icon = <IconEdit />;

const MeaningfulIconExample = () => (
  <>
    <Button icon={Icon} text="Document" className={cx('button')} />
    <Button icon={Icon} isIconOnly text="Icon Only Button" className={cx('button')} />
  </>
);

export default MeaningfulIconExample;
