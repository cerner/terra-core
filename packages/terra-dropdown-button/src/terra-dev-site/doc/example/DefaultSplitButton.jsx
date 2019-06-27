/* eslint-disable no-console */
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import { SplitButton, Button } from 'terra-dropdown-button/lib/DropdownButton';

export default () => (
  <SplitButton
    primaryOptionLabel="Primary option"
    onClick={() => { console.log('primary option'); }}
  >
    <Button label="Abacadabra" onClick={() => { console.log('hi'); }} />
    <Button label="BAbacadabra" onClick={() => { console.log('bye'); }} />
    <Button label="CAbacadabra" onClick={() => { console.log('eyb'); }} />
    <Button label="DAbacadabra" onClick={() => { console.log('ih'); }} />
  </SplitButton>
);
