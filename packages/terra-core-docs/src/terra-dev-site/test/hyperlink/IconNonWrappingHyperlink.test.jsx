import React from 'react';
import Hyperlink from 'terra-hyperlink';

export default () => (
  <div role="main" id="link-example">
    Example of a hyperlink inside some content that will wrap. With this, the icon should not wrap onto a separate line without the link text. I am a
    <Hyperlink text="Document hyperlink" href="https://www.cerner.com" variant="document" />
    {' '}
    that is forced to wrap due to space constraints. My icon wraps with me.
  </div>
);
