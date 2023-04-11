import React from 'react';
import Hyperlink from 'terra-hyperlink';

export default () => (
  <div role="main">
    <Hyperlink href="https://www.cerner.com" isDisabled text="Disabled hyperlink" />
    <br />
    <Hyperlink href="https://www.cerner.com" isDisabled variant="document" text="Disabled icon hyperlink" />
  </div>
);
