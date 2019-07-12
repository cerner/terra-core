import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DropdownButton, { Item } from 'terra-dropdown-button/lib/DropdownButton';

const Example = () => {
  const [message, setMessage] = useState('No option clicked');

  return (
    <React.Fragment>
      <DropdownButton
        label="Export"
      >
        <Item label="Export as PDF" onClick={() => setMessage('Export as PDF clicked')} />
        <Item label="Export as Plain Text" onClick={() => setMessage('Export as Plain Text clicked')} />
        <Item label="Export as Web Page" onClick={() => setMessage('Export as Web Page clicked')} />
        <Item label="Export as XML" onClick={() => setMessage('Export as XML clicked')} />
      </DropdownButton>
      <p>{message}</p>
    </React.Fragment>
  );
};

export default Example;
