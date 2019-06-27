import React from 'react';

import SplitButton, { Button } from '../../../SplitButton';

export default () => (
  <div>
    <SplitButton primaryOptionLabel="Split" onClick={() => {}} id="split">
      <Button label="1st" onClick={() => {}} />
      <Button label="2nd" onClick={() => {}} />
      <Button label="3rd" onClick={() => {}} />
    </SplitButton>
  </div>
);
