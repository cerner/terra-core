import React from 'react';
import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';
import ExampleTemplate from '../template';

export default () => (
  <ExampleTemplate>
    <CenteredActionFooter
      center={<a href="/#/site/action-footer/centered">A link</a>}
    />
  </ExampleTemplate>
);
