/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import Card from 'terra-card';
import {
  IconFeaturedOutlineYellow as Star,
  IconFeaturedOutline as EmptyStar,
} from 'terra-icon';
import VisuallyHiddenText from 'terra-visually-hidden-text';

import { width, height } from './common';

const A11yGroupInteractive = () => (
  <Card>
    <Card.Body>
      Rating:&nbsp;
      <VisuallyHiddenText text="Four out of five stars" />
      <button type="button">
        <Star a11yLabel="Rate one star" width={width} height={height} />
      </button>
      <button type="button">
        <Star a11yLabel="Rate two stars" width={width} height={height} />
      </button>
      <button type="button">
        <Star a11yLabel="Rate three stars" width={width} height={height} />
      </button>
      <button type="button">
        <Star a11yLabel="Rate four stars" width={width} height={height} />
      </button>
      <button type="button">
        <EmptyStar a11yLabel="Rate five stars" width={width} height={height} />
      </button>
    </Card.Body>
  </Card>
);

export default A11yGroupInteractive;
