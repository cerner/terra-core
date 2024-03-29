/* eslint-disable no-console */
import React from 'react';
import DropdownButton, { Item } from 'terra-dropdown-button';

export default () => (
  <DropdownButton
    label="Primary option"
    onSelect={() => { console.log('primary option'); }}
    variant="emphasis"
  >
    <Item label="1st Option" onSelect={() => { console.log('hi'); }} />
    <Item label="2nd Option" onSelect={() => { console.log('bye'); }} />
    <Item label="3rd Option" onSelect={() => { console.log('eyb'); }} />
    <Item label="4th Option" onSelect={() => { console.log('ih'); }} />
  </DropdownButton>
);
