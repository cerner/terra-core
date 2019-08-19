import React, { useState } from 'react';
import { Item, SplitButton } from 'terra-dropdown-button';

const Example = () => {
  const [message, setMessage] = useState('No option clicked');

  return (
    <React.Fragment>
      <SplitButton
        primaryOptionLabel="Primary Option"
        onSelect={() => setMessage('Primary option clicked')}
        isDisabled
      >
        <Item label="1st Option" onSelect={() => setMessage('1st option clicked')} />
        <Item label="2nd Option" onSelect={() => setMessage('2nd option clicked')} />
        <Item label="3rd Option" onSelect={() => setMessage('3rd option clicked')} />
        <Item label="4th Option" onSelect={() => setMessage('4th option clicked')} />
      </SplitButton>
      <p>{message}</p>
    </React.Fragment>
  );
};

export default Example;
