import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';
import ExampleTemplate from '../../common/ExampleTemplate';

export default () => (
  <ExampleTemplate>
    <CenteredActionFooter
      center={<Hyperlink href="#">A link</Hyperlink>}
    />
  </ExampleTemplate>
);
