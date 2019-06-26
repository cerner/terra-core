/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import React from 'react';


import SplitButton from 'terra-dropdown-button/libs/SplitDropdownButton';
import DropdownButton, { Button } from '../../../DropdownButton';

export default () => (
  <div>
    <DropdownButton label="Dropdown">
      <DropdownButton.Button label="1st Option" onClick={() => { console.log('hi'); }} />
    </DropdownButton>
    { /*                                                  V this would be a required prop */ }
    <SplitButton primaryOptionLabel="Split primary option" callback={() => { console.log('primary option'); }}>
      <Button label="1st Option" callback={() => { console.log('hi'); }} />
    </SplitButton>
  </div>
);
