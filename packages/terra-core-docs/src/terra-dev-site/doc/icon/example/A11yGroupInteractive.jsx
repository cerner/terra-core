/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Star from 'terra-icon/lib/icon/IconFeaturedOutlineYellow';
import EmptyStar from 'terra-icon/lib/icon/IconFeaturedOutline';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import Card from 'terra-card';
import { width, height } from './common';

const A11yGroupInteractive = () => (
  <Card>
    <Card.Body>
      Rating:&nbsp;
      <VisuallyHiddenText text="Four out of five stars" />
      <a href="#">
        <Star a11yLabel="Rate one star" width={width} height={height} />
      </a>
      <a href="#">
        <Star a11yLabel="Rate two stars" width={width} height={height} />
      </a>
      <a href="#">
        <Star a11yLabel="Rate three stars" width={width} height={height} />
      </a>
      <a href="#">
        <Star a11yLabel="Rate four stars" width={width} height={height} />
      </a>
      <a href="#">
        <EmptyStar a11yLabel="Rate five stars" width={width} height={height} />
      </a>
    </Card.Body>
  </Card>
);

export default A11yGroupInteractive;
