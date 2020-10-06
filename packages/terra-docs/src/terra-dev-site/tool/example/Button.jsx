import React, { useState } from 'react';
import { Button } from '@cerner/terra-docs';

export default () => {
  const [clickCount, setClickCount] = useState(0);
  return (
    <>
      <Button onClick={() => { setClickCount(clickCount + 1); }}>
        Text
      </Button>

      <p>
        {`Clicked ${clickCount} times`}
      </p>
    </>
  );
};
