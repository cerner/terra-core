import React from 'react';
import Hyperlink from 'terra-hyperlink';
import HyperlinkButton from 'terra-hyperlink/lib/HyperlinkButton';

const exampleHyperlink = <Hyperlink text="Document hyperlink" variant="document" href="https://www.cerner.com" />;
const exampleHyperlinkButton = <HyperlinkButton text="Document hyperlink" variant="document" onClick={() => {}} />;

export default () => (
  <div role="main" id="link-example">
    <p>
      Example of a hyperlink inside some content that will wrap. With this, the icon should not wrap onto a separate line without the link text. I am a
      {` ${exampleHyperlink} `}
      that is forced to wrap due to space constraints. My icon wraps with me.
    </p>
    <p>
      Example of a hyperlink inside some content that will wrap. With this, the icon should not wrap onto a separate line without the link text. I am a
      {` ${exampleHyperlinkButton} `}
      that is forced to wrap due to space constraints. My icon wraps with me.
    </p>
  </div>
);
