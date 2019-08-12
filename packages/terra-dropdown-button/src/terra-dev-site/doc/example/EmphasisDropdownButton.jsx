import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DropdownButton, { Item, Variants } from 'terra-dropdown-button/lib/DropdownButton';

const Example = () => {
  const [message, setMessage] = useState('No option clicked');

  return (
    <>
      <DropdownButton
        label="Dropdown"
        variant={Variants.EMPHASIS}
      >
        <Item label="1st Option" onSelect={() => setMessage('1st option clicked')} />
        <Item label="2nd Option" onSelect={() => setMessage('2nd option clicked')} />
        <Item label="3rd Option" onSelect={() => setMessage('3rd option clicked')} />
        <Item label="4th Option" onSelect={() => setMessage('4th option clicked')} />
      </DropdownButton>
      <p>{message}</p>
    </>
  );
};

export default Example;
