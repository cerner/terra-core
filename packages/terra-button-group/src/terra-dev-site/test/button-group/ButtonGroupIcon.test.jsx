import React from 'react';
import classNames from 'classnames/bind';
import ButtonGroup from '../../../ButtonGroup';
import styles from './ButtonGroupIcon.test.scss';

const cx = classNames.bind(styles);

const icon = <span className={cx(['test', 'icon'])}><svg width="1em" height="1em"><rect width="1em" height="1em" /></svg></span>;
const icon = <svg width="1em" height="1em"><rect width="1em" height="1em" fill="#000" /></svg>;

const IconButtonGroup = () => (
  <ButtonGroup id="button-group-icon">
    <ButtonGroup.Button text="Text1" icon={icon} key="icon1" />
    <ButtonGroup.Button text="Text2" icon={icon} key="icon2" />
  </ButtonGroup>
);

export default IconButtonGroup;
