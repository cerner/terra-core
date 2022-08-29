import React from 'react';
import { AnchorButton } from 'terra-button';
import classNames from 'classnames/bind';
import Card from 'terra-card';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const AnchorButtonAccess = () => (
  <Card>
    <Card.Body>
      <h3>Non-Native Button</h3>
      <AnchorButton href="#" text="Go-to" className={cx(['button', 'anchor-button'])} />
    </Card.Body>
  </Card>
);

export default AnchorButtonAccess;
