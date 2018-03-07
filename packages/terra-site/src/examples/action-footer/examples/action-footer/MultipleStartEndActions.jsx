import React from 'react';
import ActionFooter from 'terra-action-footer';
import Button from 'terra-button';
import Spacer from 'terra-spacer';

const MultipleStartEndActionsExample = () => (
  <ActionFooter
    start={<a href="/#/site/action-footer">Start Action</a>}
    end={
      <div>
        <Spacer isInlineBlock paddingRight="medium">
          <Button text="Cancel" />
        </Spacer>
        <Button text="Submit" variant={Button.Opts.Variants.EMPHASIS} />
      </div>
    }
  />
);

export default MultipleStartEndActionsExample;
