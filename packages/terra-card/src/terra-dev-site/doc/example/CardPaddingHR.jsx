import React from 'react';
import classNames from 'classnames/bind';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Card from 'terra-card/lib/Card';
import styles from './CardPaddingHR.scss';

const cx = classNames.bind(styles);

const CardPaddingHR = () => (
  <div>
    <Card>
      <Card.Body>Hello World Above The Line!!</Card.Body>
      <hr className={cx('horizontal-rule')} />
      <Card.Body>Hello World Below The Line!!</Card.Body>
    </Card>
  </div>
);

export default CardPaddingHR;
