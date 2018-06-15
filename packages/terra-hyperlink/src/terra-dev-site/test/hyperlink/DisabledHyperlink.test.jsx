import React from 'react';
import Hyperlink from '../../../Hyperlink';

export default () => (
  <div role="main">
    <Hyperlink href="https://www.cerner.com" isDisabled>Disabled hyperlink</Hyperlink>
    <br />
    <Hyperlink href="https://www.cerner.com" isDisabled variant="document">Disabled icon hyperlink</Hyperlink>
  </div>
);
