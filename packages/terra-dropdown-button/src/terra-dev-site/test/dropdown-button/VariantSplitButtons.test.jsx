/* eslint-disable no-console */
import React from 'react';
import classnames from 'classnames/bind';
import { SplitButton, Item } from '../../../DropdownButton';
import styles from './ExtraSpacing.module.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('container-spacing-wrapper')}>
    <SplitButton
      primaryOptionLabel="Split Neutral"
      onSelect={() => { console.log('primary option'); }}
      className={cx('button-spacing-wrapper')}
      id="split-neutral"
      variant="neutral"
    >
      <Item label="1st Option" onSelect={() => { console.log('hi'); }} />
      <Item label="2nd Option" onSelect={() => { console.log('bye'); }} />
      <Item label="3rd Option" onSelect={() => { console.log('eyb'); }} />
      <Item label="4th Option" onSelect={() => { console.log('ih'); }} />
    </SplitButton>
    <SplitButton
      primaryOptionLabel="Split Neutral Compact"
      onSelect={() => { console.log('primary option'); }}
      className={cx('button-spacing-wrapper')}
      id="split-neutral-compact"
      isCompact
      variant="neutral"
    >
      <Item label="1st Option" onSelect={() => { console.log('hi'); }} />
      <Item label="2nd Option" onSelect={() => { console.log('bye'); }} />
      <Item label="3rd Option" onSelect={() => { console.log('eyb'); }} />
      <Item label="4th Option" onSelect={() => { console.log('ih'); }} />
    </SplitButton>
    <br />
    <br />
    <SplitButton
      primaryOptionLabel="Split Ghost"
      onSelect={() => { console.log('primary option'); }}
      className={cx('button-spacing-wrapper')}
      id="split-ghost"
      variant="ghost"
    >
      <Item label="1st Option" onSelect={() => { console.log('hi'); }} />
      <Item label="2nd Option" onSelect={() => { console.log('bye'); }} />
      <Item label="3rd Option" onSelect={() => { console.log('eyb'); }} />
      <Item label="4th Option" onSelect={() => { console.log('ih'); }} />
    </SplitButton>
    <SplitButton
      primaryOptionLabel="Split Ghost Compact"
      onSelect={() => { console.log('primary option'); }}
      className={cx('button-spacing-wrapper')}
      id="split-ghost-compact"
      isCompact
      variant="ghost"
    >
      <Item label="1st Option" onSelect={() => { console.log('hi'); }} />
      <Item label="2nd Option" onSelect={() => { console.log('bye'); }} />
      <Item label="3rd Option" onSelect={() => { console.log('eyb'); }} />
      <Item label="4th Option" onSelect={() => { console.log('ih'); }} />
    </SplitButton>
  </div>
);
