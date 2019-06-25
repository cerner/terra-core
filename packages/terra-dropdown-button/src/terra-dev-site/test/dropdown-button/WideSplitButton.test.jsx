import React from 'react';

import DropdownButton, { Types } from '../../../DropdownButton';

export default () => (
  <div>
    <DropdownButton defaultOption={{ label: 'Wide Label '.repeat(50), callback: () => {} }} type={Types.SPLIT} id="wide-label">
      <DropdownButton.Option label="1st" callback={() => {}} />
      <DropdownButton.Option label="2nd" callback={() => {}} />
    </DropdownButton>
    <DropdownButton defaultOption={{ label: 'Wide option', callback: () => {} }} type={Types.SPLIT} id="wide-option">
      <DropdownButton.Option label={'Wide option '.repeat(50)} callback={() => {}} />
      <DropdownButton.Option label="Not very wide option" callback={() => {}} />
    </DropdownButton>
  </div>
);
