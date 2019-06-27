/* eslint-disable no-console */
import React from 'react';
import classnames from 'classnames/bind';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DropdownButton, { Button } from '../../../DropdownButton';
import styles from './BoundedButton.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('container')}>
    <DropdownButton
      label="Primary"
      onClick={() => { console.log('primary option'); }}
      className={cx('top-left')}
      id="top-left"
    >
      <Button label="1st Option Lorem Ipsum Dolor" onClick={() => { console.log('hi'); }} />
      <Button label="2nd Option" onClick={() => { console.log('bye'); }} />
    </DropdownButton>
    <DropdownButton
      label="Primary"
      onClick={() => { console.log('primary option'); }}
      className={cx('top-right')}
      id="top-right"
    >
      <Button label="1st Option Lorem Ipsum Dolor" onClick={() => { console.log('hi'); }} />
      <Button label="2nd Option" onClick={() => { console.log('bye'); }} />
    </DropdownButton>
    <DropdownButton
      label="Primary"
      onClick={() => { console.log('primary option'); }}
      className={cx('bottom-left')}
      id="bottom-left"
    >
      <Button label="1st Option Lorem Ipsum Dolor" onClick={() => { console.log('hi'); }} />
      <Button label="2nd Option" onClick={() => { console.log('bye'); }} />
    </DropdownButton>
    <DropdownButton
      label="Primary"
      onClick={() => { console.log('primary option'); }}
      className={cx('bottom-right')}
      id="bottom-right"
    >
      <Button label="1st Option Lorem Ipsum Dolor" onClick={() => { console.log('hi'); }} />
      <Button label="2nd Option" onClick={() => { console.log('bye'); }} />
    </DropdownButton>
  </div>
);
