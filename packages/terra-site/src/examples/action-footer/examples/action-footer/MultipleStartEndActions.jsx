import React from 'react';
import ActionFooter from 'terra-action-footer';
import Button from 'terra-button';
import Spacer from 'terra-spacer';

import ExampleTemplate from '../template';

export default () => (
  <ExampleTemplate>
    <ActionFooter
      start={<a href="/#/site/action-footer">Start Action</a>}
      end={
        <div>
          <Spacer isInlineBlock paddingRight="medium">
            <Button text="Submit" variant={Button.Opts.Variants.EMPHASIS} />
          </Spacer>
          <Button text="Cancel" />
        </div>
      }
    />
  </ExampleTemplate>
);
