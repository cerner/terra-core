import React from 'react';
import Button from 'terra-button';
import Spacer from 'terra-spacer';
import ActionFooter from '../../../../ActionFooter';
import ExampleTemplate from '../../common/ExampleTemplate';

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
