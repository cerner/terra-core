/* eslint-disable no-console */
import React from 'react';
import classnames from 'classnames/bind';
import SplitButton, { Item } from '../../../SplitButton';
import styles from './BoundedButton.module.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('container')}>
    <SplitButton
      primaryOptionLabel="Primary"
      onSelect={() => { console.log('primary option'); }}
      className={cx('top-left')}
      id="top-left"
    >
      <Item label="1st Option Lorem Ipsum Dolor" onSelect={() => { console.log('hi'); }} />
      <Item label="2nd Option" onSelect={() => { console.log('bye'); }} />
    </SplitButton>
    <SplitButton
      primaryOptionLabel="Primary"
      onSelect={() => { console.log('primary option'); }}
      className={cx('top-right')}
      id="top-right"
    >
      <Item label="1st Option Lorem Ipsum Dolor" onSelect={() => { console.log('hi'); }} />
      <Item label="2nd Option" onSelect={() => { console.log('bye'); }} />
    </SplitButton>
    <SplitButton
      primaryOptionLabel="Primary"
      onSelect={() => { console.log('primary option'); }}
      className={cx('bottom-left')}
      id="bottom-left"
    >
      <Item label="1st Option Lorem Ipsum Dolor" onSelect={() => { console.log('hi'); }} />
      <Item label="2nd Option" onSelect={() => { console.log('bye'); }} />
    </SplitButton>
    <SplitButton
      primaryOptionLabel="Primary"
      onSelect={() => { console.log('primary option'); }}
      className={cx('bottom-right')}
      id="bottom-right"
    >
      <Item label="1st Option Lorem Ipsum Dolor" onSelect={() => { console.log('hi'); }} />
      <Item label="2nd Option" onSelect={() => { console.log('bye'); }} />
    </SplitButton>
  </div>
);
