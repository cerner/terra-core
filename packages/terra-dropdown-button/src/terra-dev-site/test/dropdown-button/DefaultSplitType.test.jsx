import React from 'react';

import DropdownButton, { Types } from '../../../DropdownButton';

export default () => (
  <div>
    <DropdownButton defaultOption={{ label: 'Split', callback: () => {} }} type={Types.SPLIT} id="split">
      <DropdownButton.Option label="1st" callback={() => {}} />
    </DropdownButton>
  </div>
);
