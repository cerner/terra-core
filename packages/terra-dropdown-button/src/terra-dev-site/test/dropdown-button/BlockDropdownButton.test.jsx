/* eslint-disable no-console */
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DropdownButton, { Item } from '../../../DropdownButton';

export default () => (
  <DropdownButton
    label="Primary option"
    onSelect={() => { console.log('primary option'); }}
    isBlock
  >
    <Item label="1st Option" onSelect={() => { console.log('hi'); }} />
    <Item label="2nd Option" onSelect={() => { console.log('bye'); }} />
    <Item label="3rd Option" onSelect={() => { console.log('eyb'); }} />
    <Item label="4th Option" onSelect={() => { console.log('ih'); }} />
  </DropdownButton>
);
