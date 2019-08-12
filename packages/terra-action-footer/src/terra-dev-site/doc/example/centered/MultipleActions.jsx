import React from 'react';
import Button from 'terra-button';
import Spacer from 'terra-spacer';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';
import ExampleTemplate from '../../common/ExampleTemplate';

export default () => (
  <ExampleTemplate>
    <CenteredActionFooter
      center={(
        <>
          <Spacer isInlineBlock marginRight="medium">
            <Button text="Action One" />
          </Spacer>
          <Button text="Action Two" />
        </>
      )}
    />
  </ExampleTemplate>
);
