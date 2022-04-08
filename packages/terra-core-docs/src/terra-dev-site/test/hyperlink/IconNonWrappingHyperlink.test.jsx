import React from 'react';
import Hyperlink from 'terra-hyperlink';
import HyperlinkButton from 'terra-hyperlink/lib/HyperlinkButton';

export default () => (
  <div role="main" id="link-example">
    <p>
      Example of a hyperlink inside some content that will wrap. With this, the icon should not wrap onto a separate line without the link text. I am a
      {' '}
      <Hyperlink text="Document hyperlink" href="https://www.cerner.com" variant="document" />
      {' '}
      that is forced to wrap due to space constraints. My icon wraps with me.
    </p>
    <p>
      Example of a hyperlink inside some content that will wrap. With this, the icon should not wrap onto a separate line without the link text. I am a
      {' '}
      <HyperlinkButton text="Document hyperlink button" onClick={() => {}} variant="document" />
      {' '}
      that is forced to wrap due to space constraints. My icon wraps with me.
    </p>
  </div>
);
