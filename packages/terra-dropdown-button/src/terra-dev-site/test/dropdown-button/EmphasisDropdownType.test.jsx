/* eslint-disable no-console */
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DropdownButton from '../../../DropdownButton';

export default () => (
  <DropdownButton
    defaultOption={{ label: 'Primary option', callback: () => { console.log('primary option'); } }}
    variant="emphasis"
  >
    <DropdownButton.Option label="1st Option" callback={() => { console.log('hi'); }} />
    <DropdownButton.Option label="2nd Option" callback={() => { console.log('bye'); }} />
    <DropdownButton.Option label="3rd Option" callback={() => { console.log('eyb'); }} />
    <DropdownButton.Option label="4th Option" callback={() => { console.log('ih'); }} />
  </DropdownButton>
);
