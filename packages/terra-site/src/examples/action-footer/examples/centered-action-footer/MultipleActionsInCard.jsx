import React from 'react';
import Button from 'terra-button';
import Card from 'terra-card';
import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';
import Spacer from 'terra-spacer';

const MultipleActionsInCardExample = () => (
  <Card>
    <Card.Body>
      Lorem ipsum
    </Card.Body>
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
  </Card>
);

export default MultipleActionsInCardExample;
