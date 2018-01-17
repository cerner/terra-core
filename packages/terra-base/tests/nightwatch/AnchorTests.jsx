import React from 'react';
import Base from '../../lib/Base';

const AnchorTests = () => (
  <Base>
    <a rel="noreferrer noopener" target="_blank" href="https://my.cerner.com">hyperlink</a>
    <br />
    <a href="https://my.cerner.com" aria-disabled="true">disabled hyperlink</a>
  </Base>
);

export default AnchorTests;
