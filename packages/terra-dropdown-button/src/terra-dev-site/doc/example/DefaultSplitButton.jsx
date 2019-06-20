/* eslint-disable no-console */
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DropdownButton from '../../../DropdownButton';

export default () => (
  <DropdownButton
    defaultOption={{ label: 'Primary option', callback: () => { console.log('primary option'); } }}
    type="split"
  >
    <DropdownButton.Option label="Abacadabra" callback={() => { console.log('hi'); }} />
    <DropdownButton.Option label="BAbacadabra" callback={() => { console.log('bye'); }} />
    <DropdownButton.Option label="CAbacadabra" callback={() => { console.log('eyb'); }} />
    <DropdownButton.Option label="DAbacadabra" callback={() => { console.log('ih'); }} />
  </DropdownButton>
);
