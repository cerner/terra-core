import React, { useState } from 'react';
import DropdownButton, { Item } from 'terra-dropdown-button';

const Example = () => {
  const [message, setMessage] = useState('No option clicked');

  return (
    <React.Fragment>
      <DropdownButton
        label="Export"
      >
        <Item label="Export as PDF" onSelect={() => setMessage('Export as PDF clicked')} />
        <Item label="Export as Plain Text" onSelect={() => setMessage('Export as Plain Text clicked')} />
        <Item label="Export as Web Page" onSelect={() => setMessage('Export as Web Page clicked')} />
        <Item label="Export as XML" onSelect={() => setMessage('Export as XML clicked')} />
      </DropdownButton>
      <p>{message}</p>
    </React.Fragment>
  );
};

export default Example;
