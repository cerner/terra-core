/* eslint-disable no-console */
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DropdownButton, { Item } from '../../../DropdownButton';

export default () => (
  <DropdownButton
    label="Primary option"
    onClick={() => { console.log('primary option'); }}
    variant="emphasis"
  >
    <Item label="1st Option" onClick={() => { console.log('hi'); }} />
    <Item label="2nd Option" onClick={() => { console.log('bye'); }} />
    <Item label="3rd Option" onClick={() => { console.log('eyb'); }} />
    <Item label="4th Option" onClick={() => { console.log('ih'); }} />
  </DropdownButton>
);
