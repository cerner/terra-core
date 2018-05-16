import React from 'react';
import Button from 'terra-button';
import Spacer from 'terra-spacer';
import CenteredActionFooter from '../../../../CenteredActionFooter';
import ExampleTemplate from '../../common/ExampleTemplate';

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
