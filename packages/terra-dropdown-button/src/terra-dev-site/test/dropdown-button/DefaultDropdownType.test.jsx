import React from 'react';

import DropdownButton from '../../../DropdownButton';

export default () => (
  <div>
    <DropdownButton label="Dropdown" id="dropdown">
      <DropdownButton.Option label="1st" callback={() => {}} />
    </DropdownButton>
  </div>
);
