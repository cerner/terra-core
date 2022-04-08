import React from 'react';
import Hyperlink from 'terra-hyperlink';

export default () => (
  <div role="main">
    <p>
      <Hyperlink href="http://www.terra-ui.com" text="Hyperlink" />
    </p>
    <p>
      <Hyperlink href="http://www.terra-ui.com" variant="audio" text="Radio Broadcast of the 20th anniversary for the Wright Brothers First Flight" title="Radio Broadcast of the 20th anniversary for the Wright Brothers First Flight, December 17, 1923, © Copyright WBZ Boston" />
    </p>
    <p>
      <Hyperlink href="http://www.terra-ui.com" variant="external" text="The Wright Brothers Biography" />
    </p>
    <p>
      <Hyperlink href="http://www.terra-ui.com" variant="document" text="Anatomy of the 1903 Wright Flyer" />
    </p>
    <p>
      <Hyperlink href="http://www.terra-ui.com" variant="image" text="Orville Wright and Wilbur Wright, Kitty Hawk, North Carolina" />
    </p>
    <p>
      <Hyperlink href="http://www.terra-ui.com" variant="video" text="Wright Brothers First Flight Footage, 1903 - YouTube" />
    </p>
  </div>
);
