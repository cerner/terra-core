/* eslint-disable no-console */
import React from 'react';
import classnames from 'classnames/bind';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SplitButton, { Item } from '../../../SplitButton';
import styles from './BoundedButton.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('container')}>
    <SplitButton
      primaryOptionLabel="Primary"
      onClick={() => { console.log('primary option'); }}
      className={cx('top-left')}
      id="top-left"
    >
      <Item label="1st Option Lorem Ipsum Dolor" onClick={() => { console.log('hi'); }} />
      <Item label="2nd Option" onClick={() => { console.log('bye'); }} />
    </SplitButton>
    <SplitButton
      primaryOptionLabel="Primary"
      onClick={() => { console.log('primary option'); }}
      className={cx('top-right')}
      id="top-right"
    >
      <Item label="1st Option Lorem Ipsum Dolor" onClick={() => { console.log('hi'); }} />
      <Item label="2nd Option" onClick={() => { console.log('bye'); }} />
    </SplitButton>
    <SplitButton
      primaryOptionLabel="Primary"
      onClick={() => { console.log('primary option'); }}
      className={cx('bottom-left')}
      id="bottom-left"
    >
      <Item label="1st Option Lorem Ipsum Dolor" onClick={() => { console.log('hi'); }} />
      <Item label="2nd Option" onClick={() => { console.log('bye'); }} />
    </SplitButton>
    <SplitButton
      primaryOptionLabel="Primary"
      onClick={() => { console.log('primary option'); }}
      className={cx('bottom-right')}
      id="bottom-right"
    >
      <Item label="1st Option Lorem Ipsum Dolor" onClick={() => { console.log('hi'); }} />
      <Item label="2nd Option" onClick={() => { console.log('bye'); }} />
    </SplitButton>
  </div>
);
