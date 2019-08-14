import React from 'react';
import Hyperlink from 'terra-hyperlink';
import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';
import ExampleTemplate from '../../common/ExampleTemplate';


export default () => (
  <ExampleTemplate>
    <CenteredActionFooter
      center={<Hyperlink href="#">A link</Hyperlink>}
    />
  </ExampleTemplate>
);
