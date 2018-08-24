import React from 'react';
import Hyperlink from '../../../Hyperlink';

export default () => (
  <div role="main" id="link-example">
Example of a hyperlink inside some content that will wrap. With this, the icon should not wrap onto a separate line without the link text. I am a
    <Hyperlink href="https://www.cerner.com" variant="document">Document hyperlink</Hyperlink>
    {' '}
that is forced to wrap due to space constraints. My icon wraps with me.
  </div>
);
