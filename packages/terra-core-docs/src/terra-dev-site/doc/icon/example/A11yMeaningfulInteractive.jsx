/* eslint-disable jsx-a11y/control-has-associated-label */
// This file is autogenerated from scripts/src/generate-example
import React from 'react';

import Card from 'terra-card';
import { IconMediaPlay, IconMediaFastForward, IconMediaRewind } from 'terra-icon';

import { width, height } from './common';

const A11yMeaningfulInteractive = () => (
  <Card>
    <Card.Body>
      <div role="group" aria-labelledby="controlsLabel">
        <span id="controlsLabel">Playback controls</span>
        <br />
        <button type="button">
          <IconMediaRewind a11yLabel="Rewind" width={width} height={height} />
        </button>
        <button type="button">
          <IconMediaPlay a11yLabel="Play" width={width} height={height} />
        </button>
        <button type="button">
          <IconMediaFastForward a11yLabel="Fast Forward" width={width} height={height} />
        </button>
      </div>
    </Card.Body>
  </Card>
);

export default A11yMeaningfulInteractive;
