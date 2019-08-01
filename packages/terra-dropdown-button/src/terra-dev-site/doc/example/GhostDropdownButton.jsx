import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DropdownButton, { Item } from 'terra-dropdown-button/lib/DropdownButton';

const GhostDropdownButton = () => {
  const [message, setMessage] = useState('No option clicked');

  return (
    <React.Fragment>
      <DropdownButton
        label="Dropdown"
        variant="ghost"
      >
        <Item label="1st Option" onSelect={() => setMessage('1st option clicked')} />
        <Item label="2nd Option" onSelect={() => setMessage('2nd option clicked')} />
        <Item label="3rd Option" onSelect={() => setMessage('3rd option clicked')} />
        <Item label="4th Option" onSelect={() => setMessage('4th option clicked')} />
      </DropdownButton>
      <p>{message}</p>
    </React.Fragment>
  );
};

export default GhostDropdownButton;
