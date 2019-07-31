/* eslint-disable no-console */
import React from 'react';
import classnames from 'classnames/bind';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DropdownButton, { Item } from '../../../DropdownButton';

import styles from './ExtraSpacing.module.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('container-spacing-wrapper')}>
    <DropdownButton
      label="Dropdown Emphasis"
      onSelect={() => { console.log('primary option'); }}
      className={cx('button-spacing-wrapper')}
      id="dropdown-emphasis"
      variant="emphasis"
    >
      <Item label="1st Option" onSelect={() => { console.log('hi'); }} />
      <Item label="2nd Option" onSelect={() => { console.log('bye'); }} />
      <Item label="3rd Option" onSelect={() => { console.log('eyb'); }} />
      <Item label="4th Option" onSelect={() => { console.log('ih'); }} />
    </DropdownButton>
    <DropdownButton
      label="Dropdown Emphasis Compact"
      onSelect={() => { console.log('primary option'); }}
      className={cx('button-spacing-wrapper')}
      id="dropdown-emphasis-compact"
      isCompact
      variant="emphasis"
    >
      <Item label="1st Option" onSelect={() => { console.log('hi'); }} />
      <Item label="2nd Option" onSelect={() => { console.log('bye'); }} />
      <Item label="3rd Option" onSelect={() => { console.log('eyb'); }} />
      <Item label="4th Option" onSelect={() => { console.log('ih'); }} />
    </DropdownButton>
    <br />
    <br />
    <DropdownButton
      label="Dropdown Neutral"
      onSelect={() => { console.log('primary option'); }}
      className={cx('button-spacing-wrapper')}
      id="dropdown-neutral"
      variant="neutral"
    >
      <Item label="1st Option" onSelect={() => { console.log('hi'); }} />
      <Item label="2nd Option" onSelect={() => { console.log('bye'); }} />
      <Item label="3rd Option" onSelect={() => { console.log('eyb'); }} />
      <Item label="4th Option" onSelect={() => { console.log('ih'); }} />
    </DropdownButton>
    <DropdownButton
      label="Dropdown Neutral Compact"
      onSelect={() => { console.log('primary option'); }}
      className={cx('button-spacing-wrapper')}
      id="dropdown-neutral-compact"
      isCompact
      variant="neutral"
    >
      <Item label="1st Option" onSelect={() => { console.log('hi'); }} />
      <Item label="2nd Option" onSelect={() => { console.log('bye'); }} />
      <Item label="3rd Option" onSelect={() => { console.log('eyb'); }} />
      <Item label="4th Option" onSelect={() => { console.log('ih'); }} />
    </DropdownButton>
    <br />
    <br />
    <DropdownButton
      label="Dropdown Ghost"
      onSelect={() => { console.log('primary option'); }}
      className={cx('button-spacing-wrapper')}
      id="dropdown-ghost"
      variant="ghost"
    >
      <Item label="1st Option" onSelect={() => { console.log('hi'); }} />
      <Item label="2nd Option" onSelect={() => { console.log('bye'); }} />
      <Item label="3rd Option" onSelect={() => { console.log('eyb'); }} />
      <Item label="4th Option" onSelect={() => { console.log('ih'); }} />
    </DropdownButton>
    <DropdownButton
      label="Dropdown Ghost Compact"
      onSelect={() => { console.log('primary option'); }}
      className={cx('button-spacing-wrapper')}
      id="dropdown-ghost-compact"
      isCompact
      variant="ghost"
    >
      <Item label="1st Option" onSelect={() => { console.log('hi'); }} />
      <Item label="2nd Option" onSelect={() => { console.log('bye'); }} />
      <Item label="3rd Option" onSelect={() => { console.log('eyb'); }} />
      <Item label="4th Option" onSelect={() => { console.log('ih'); }} />
    </DropdownButton>
  </div>
);
