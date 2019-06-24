import React from 'react';

import DropdownButton from '../../../DropdownButton';

export default () => (
  <div>
    <DropdownButton defaultOption={{ label: 'Dropdown', callback: () => {} }} id="dropdown">
      <DropdownButton.Option label="1st" callback={() => {}} />
    </DropdownButton>
  </div>
);
