import React from 'react';
import A from '../../../Hyperlink';

export default () => (
  <div role="main">
    <h1>Disabled hyperlink</h1>
    <A id="link" href="https://www.cerner.com" isDisabled>Disabled hyperlink</A>
  </div>
);
