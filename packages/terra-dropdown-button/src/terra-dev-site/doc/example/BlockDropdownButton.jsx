/* eslint-disable no-console */
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DropdownButton, { Button } from 'terra-dropdown-button/lib/DropdownButton';

export default () => (
  <DropdownButton
    label="Dropdown"
    isBlock
  >
    <Button label="1st Option" onClick={() => { console.log('hi'); }} />
    <Button label="2nd Option" onClick={() => { console.log('bye'); }} />
    <Button label="3rd Option" onClick={() => { console.log('eyb'); }} />
    <Button label="4th Option" onClick={() => { console.log('ih'); }} />
  </DropdownButton>
);
