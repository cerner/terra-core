import React from 'react';
import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';
import Button from 'terra-button';
import Spacer from 'terra-spacer';

const MultipleActionsExample = () => (
  <CenteredActionFooter
    center={
      <div>
        <Spacer isInlineBlock paddingRight="medium">
          <Button text="Cancel" />
        </Spacer>
        <Button text="Submit" variant={Button.Opts.Variants.EMPHASIS} />
      </div>
    }
  />
);

export default MultipleActionsExample;
