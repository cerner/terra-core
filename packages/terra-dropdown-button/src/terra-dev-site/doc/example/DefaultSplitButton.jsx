import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import { Button, SplitButton } from 'terra-dropdown-button/lib/DropdownButton';

const Example = () => {
  const [message, setMessage] = useState('No option clicked');

  return (
    <React.Fragment>
      <SplitButton
        primaryOptionLabel="Reply"
        onClick={() => setMessage('Reply clicked')}
      >
        <Button label="Reply All" onClick={() => setMessage('Reply All clicked')} />
        <Button label="Forward" onClick={() => setMessage('Forward clicked')} />
        <Button label="Reply in 10 minutes" onClick={() => setMessage('Reply in 10 minutes clicked')} />
        <Button label="Selective Reply" onClick={() => setMessage('Selective Reply clicked')} />
      </SplitButton>
      <p>{message}</p>
    </React.Fragment>
  );
};

export default Example;
