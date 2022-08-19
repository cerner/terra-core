import React from 'react';
import Button from 'terra-button/lib/Button';
import classNames from 'classnames/bind';
import Card from 'terra-card';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const AnchorButtonAccess = () => (
  <Card>
    <Card.Body>
      <h3>Patients</h3>
      <Button href="#" text="Show Patients" className={cx('button')} />
    </Card.Body>
  </Card>
);

export default AnchorButtonAccess;
