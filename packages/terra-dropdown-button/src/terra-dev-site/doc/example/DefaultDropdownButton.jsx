import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DropdownButton, { Item } from 'terra-dropdown-button/lib/DropdownButton';

const Example = () => {
  const [message, setMessage] = useState('No option clicked');

  return (
    <>
      <DropdownButton
        label="Export"
      >
        <Item label="Export as PDF" onSelect={() => setMessage('Export as PDF clicked')} />
        <Item label="Export as Plain Text" onSelect={() => setMessage('Export as Plain Text clicked')} />
        <Item label="Export as Web Page" onSelect={() => setMessage('Export as Web Page clicked')} />
        <Item label="Export as XML" onSelect={() => setMessage('Export as XML clicked')} />
      </DropdownButton>
      <p>{message}</p>
    </>
  );
};

export default Example;
