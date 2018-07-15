import React from 'react';
import Button from 'terra-button';
import Spacer from 'terra-spacer';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import CenteredActionFooter from '../../../../../src/CenteredActionFooter';
import ExampleTemplate from '../../common/ExampleTemplate';

export default () => (
  <ExampleTemplate>
    <CenteredActionFooter
      isBorderless
      center={
        <div style={{ width: '100%' }}>
          <Spacer paddingBottom="medium">
            <Button isBlock text="First Action" />
          </Spacer>
          <Button isBlock text="Second Action" />
        </div>
      }
    />
  </ExampleTemplate>
);
