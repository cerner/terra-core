import React from 'react';
import Hyperlink from 'terra-hyperlink';

export default () => (
  <div role="main">
    <Hyperlink text="Disabled hyperlink" href="https://www.cerner.com" isDisabled />
    <br />
    <Hyperlink text="Disabled icon hyperlink" href="https://www.cerner.com" isDisabled variant="document" />
  </div>
);
