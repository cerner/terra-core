import React from 'react';
import Button from 'terra-button';
import Spacer from 'terra-spacer';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import BlockActionFooter from 'terra-action-footer/lib/BlockActionFooter';
import ExampleTemplate from '../../common/ExampleTemplate';

export default () => (
  <ExampleTemplate>
    <BlockActionFooter>
      <Spacer paddingBottom="medium">
        <Button isBlock text="First Action" />
      </Spacer>
      <Button isBlock text="Second Action" />
    </BlockActionFooter>
  </ExampleTemplate>
);
