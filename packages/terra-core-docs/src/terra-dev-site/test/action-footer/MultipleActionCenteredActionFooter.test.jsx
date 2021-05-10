import React from 'react';
import Button from 'terra-button';
import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';

export default () => (
  <CenteredActionFooter
    center={(
      <div>
        FakeLink Action
        <Button text="Button Action" />
      </div>
)}
  />
);
