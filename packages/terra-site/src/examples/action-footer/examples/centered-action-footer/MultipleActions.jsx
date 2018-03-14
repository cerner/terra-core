import React from 'react';
import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';
import Button from 'terra-button';
import Spacer from 'terra-spacer';
import ExampleTemplate from '../template';

export default () => (
  <ExampleTemplate>
    <CenteredActionFooter
      center={
        <div style={{ width: '100%' }}>
          <Spacer paddingBottom="medium">
            <Button isBlock text="First Action" />
          </Spacer>
          <Button isBlock text="Second Action" />
        </div>
      }
    />
  </ExampleTemplate>
);
