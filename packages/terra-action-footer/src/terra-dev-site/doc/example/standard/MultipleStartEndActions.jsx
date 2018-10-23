import React from 'react';
import Button from 'terra-button';
import Spacer from 'terra-spacer';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ActionFooter from 'terra-action-footer/lib/ActionFooter';
import ExampleTemplate from '../../common/ExampleTemplate';

export default () => (
  <ExampleTemplate>
    <ActionFooter
      start={<Hyperlink href="#">Start Action</Hyperlink>}
      end={(
        <div>
          <Spacer isInlineBlock paddingRight="medium">
            <Button text="Submit" variant={Button.Opts.Variants.EMPHASIS} />
          </Spacer>
          <Button text="Cancel" />
        </div>
)}
    />
  </ExampleTemplate>
);
