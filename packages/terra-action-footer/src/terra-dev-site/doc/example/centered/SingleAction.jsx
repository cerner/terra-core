import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';
import ExampleTemplate from '../../common/ExampleTemplate';

export default () => (
  <ExampleTemplate>
    <CenteredActionFooter
      center={<a href="/#/site/action-footer/centered">A link</a>}
    />
  </ExampleTemplate>
);
