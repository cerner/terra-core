import React from 'react';
import HyperlinkButton from 'terra-hyperlink/lib/HyperlinkButton';

export default () => (
  <div role="main">
    <p>
    <HyperlinkButton onClick={() => {}} text="Hyperlink Button" />
    </p>
    <p>
      <HyperlinkButton onClick={() => {}} variant="audio" text="Audio Hyperlink Testy" />
    </p>
    <p>
      <HyperlinkButton onClick={() => {}} variant="external" text="External Link Hyperlink Testy" />
    </p>
    <p>
      <HyperlinkButton onClick={() => {}} variant="document" text="Document Hyperlink Testy" />
    </p>
    <p>
      <HyperlinkButton onClick={() => {}} variant="image" text="Image Hyperlink Testy" />
    </p>
    <p>
      <HyperlinkButton onClick={() => {}} variant="video" text="Video Hyperlink Testy" />
    </p>    
  </div>
);
