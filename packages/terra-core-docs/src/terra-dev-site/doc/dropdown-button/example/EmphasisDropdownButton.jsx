import React, { useState } from 'react';
import DropdownButton, { Item, Variants } from 'terra-dropdown-button';

const Example = () => {
  const [message, setMessage] = useState('No option clicked');

  return (
    <React.Fragment>
      <DropdownButton
        label="Dropdown"
        variant={Variants.EMPHASIS}
      >
        <Item label="PDF" onSelect={() => setMessage('PDF option clicked')} />
        <Item label="Plain Text" onSelect={() => setMessage('Plain Text option clicked')} />
        <Item label="Web Page" onSelect={() => setMessage('Web Page option clicked')} />
        <Item label="XML" onSelect={() => setMessage('XML option clicked')} />
      </DropdownButton>
      <p>{message}</p>
    </React.Fragment>
  );
};

export default Example;
