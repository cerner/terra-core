import React from 'react';

import DropdownButton, { Types } from '../../../DropdownButton';

export default () => (
  <div>
    <DropdownButton label="Split" callback={() => {}} type={Types.SPLIT} id="split">
      <DropdownButton.Option label="1st" callback={() => {}} />
      <DropdownButton.Option label="2nd" callback={() => {}} />
      <DropdownButton.Option label="3rd" callback={() => {}} />
    </DropdownButton>
  </div>
);
