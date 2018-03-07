import React from 'react';
import ActionFooter from 'terra-action-footer';
import Card from 'terra-card';
import Button from 'terra-button';
import Spacer from 'terra-spacer';

const MultipleStartEndActionsInCardExample = () => (
  <Card>
    <Card.Body>
      Lorem ipsum
    </Card.Body>
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
  </Card>
);

export default MultipleStartEndActionsInCardExample;
