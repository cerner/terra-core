import React from 'react';
import HyperlinkButton from 'terra-hyperlink/lib/HyperlinkButton';

export default () => (
  <div role="main">
    <p>
      <HyperlinkButton onClick={() => {}} text="Hyperlink Button" />
    </p>
    <p>
      <HyperlinkButton onClick={() => {}} variant="audio" text="Radio Broadcast of the 20th anniversary for the Wright Brothers First Flight" title="Radio Broadcast of the 20th anniversary for the Wright Brothers First Flight, December 17, 1923, © Copyright WBZ Boston" />
    </p>
    <p>
      <HyperlinkButton onClick={() => {}} variant="external" text="The Wright Brothers Biography" />
    </p>
    <p>
      <HyperlinkButton onClick={() => {}} variant="document" text="Anatomy of the 1903 Wright Flyer" />
    </p>
    <p>
      <HyperlinkButton onClick={() => {}} variant="image" text="Orville Wright and Wilbur Wright, Kitty Hawk, North Carolina" />
    </p>
    <p>
      <HyperlinkButton onClick={() => {}} variant="video" text="Wright Brothers First Flight Footage, 1903 - YouTube" />
    </p>
  </div>
);
