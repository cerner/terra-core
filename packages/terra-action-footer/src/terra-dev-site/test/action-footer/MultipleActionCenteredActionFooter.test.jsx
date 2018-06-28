import React from 'react';
import Button from 'terra-button';
import CenteredActionFooter from '../../../CenteredActionFooter';

export default () => (
  <CenteredActionFooter
    center={
      <div>
        FakeLink Action
        <Button isBlock text="Button Action" />
      </div>
    }
  />
);
