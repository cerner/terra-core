import React from 'react';
import A from '../../../Hyperlink';

export default () => (
  <div role="main">
    <A href="https://www.cerner.com" isDisabled>Disabled hyperlink</A>
    <br />
    <A href="https://www.cerner.com" isDisabled variant="document">Disabled icon hyperlink</A>
  </div>
);
