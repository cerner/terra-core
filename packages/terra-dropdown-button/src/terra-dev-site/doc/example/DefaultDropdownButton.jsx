/* eslint-disable no-console */
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DropdownButton from '../../../DropdownButton';

export default () => (
  <DropdownButton
    options={[
      { label: '1st option', callback: () => { console.log('hi'); } },
      { label: '2nd option', callback: () => { console.log('bye'); } },
      { label: '3rd option', callback: () => { console.log('eyb'); } },
      { label: '4th option', callback: () => { console.log('ih'); } },
    ]}
    defaultOption={{ label: 'Primary option', callback: () => { console.log('primary option'); } }}
    width="500px"
  />
);
