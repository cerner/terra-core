import React, { useState } from 'react';
import { Button } from 'terra-docs';

export default () => {
  const [clickCount, setClickCount] = useState(0);
  return (
    <>
      <Button onClick={() => { console.log('clicked'); setClickCount(clickCount + 1); }}>
        Text
      </Button>

      <p>
        {`Clicked ${clickCount} times`}
      </p>
    </>
  );
};
