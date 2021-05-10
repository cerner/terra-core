import React from 'react';
import Button from 'terra-button';
import Spacer from 'terra-spacer';
import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';
import ExampleTemplate from '../../common/ExampleTemplate';

export default () => (
  <ExampleTemplate>
    <CenteredActionFooter
      center={(
        <React.Fragment>
          <Spacer isInlineBlock marginRight="medium">
            <Button text="Action One" />
          </Spacer>
          <Button text="Action Two" />
        </React.Fragment>
      )}
    />
  </ExampleTemplate>
);
