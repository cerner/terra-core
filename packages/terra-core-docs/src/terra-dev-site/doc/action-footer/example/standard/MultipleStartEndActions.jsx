import React from 'react';
import Button from 'terra-button';
import Hyperlink from 'terra-hyperlink';
import Spacer from 'terra-spacer';
import ActionFooter from 'terra-action-footer';
import ExampleTemplate from '../../common/ExampleTemplate';

export default () => (
  <ExampleTemplate>
    <ActionFooter
      start={<Hyperlink href="#">Start Action</Hyperlink>}
      end={(
        <React.Fragment>
          <Spacer isInlineBlock marginRight="medium">
            <Button text="Submit" variant={Button.Opts.Variants.EMPHASIS} />
          </Spacer>
          <Button text="Cancel" />
        </React.Fragment>
      )}
    />
  </ExampleTemplate>
);
