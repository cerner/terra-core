import React from 'react';
import Hyperlink from 'terra-hyperlink';

export default () => (
  <div role="main">
    <p>
      <Hyperlink href="http://www.link.com" text="Hyperlink Normal" />
    </p>
    <p>
      <Hyperlink href="http://www.link.com" variant="audio" text="Audio Hyperlink Testy" />
    </p>
    <p>
      <Hyperlink href="http://www.link.com" variant="external" text="External Link Hyperlink Testy" />
    </p>
    <p>
      <Hyperlink href="http://www.link.com" variant="document" text="Document Hyperlink Testy" />
    </p>
    <p>
      <Hyperlink href="http://www.link.com" variant="image" text="Image Hyperlink Testy" />
    </p>
    <p>
      <Hyperlink href="http://www.link.com" variant="video" text="Video Hyperlink Testy" />
    </p>
  </div>
);
