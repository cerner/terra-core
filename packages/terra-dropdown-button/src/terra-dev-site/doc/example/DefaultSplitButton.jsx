import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import { Item, SplitButton } from 'terra-dropdown-button/lib/DropdownButton';

const Example = () => {
  const [message, setMessage] = useState('No option clicked');

  return (
    <React.Fragment>
      <SplitButton
        primaryOptionLabel="Reply"
        onClick={() => setMessage('Reply clicked')}
      >
        <Item label="Reply All" onClick={() => setMessage('Reply All clicked')} />
        <Item label="Forward" onClick={() => setMessage('Forward clicked')} />
        <Item label="Reply in 10 minutes" onClick={() => setMessage('Reply in 10 minutes clicked')} />
        <Item label="Selective Reply" onClick={() => setMessage('Selective Reply clicked')} />
      </SplitButton>
      <p>{message}</p>
    </React.Fragment>
  );
};

export default Example;
