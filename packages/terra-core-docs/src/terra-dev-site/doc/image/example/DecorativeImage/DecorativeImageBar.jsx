import React from 'react';
import { DecorativeImage } from 'terra-image';
import decorativeBar from '../../assets/decorative-bar.png';

const DecorativeImageBar = () => (
  <div>
    <h2>Image used as part of page design.</h2>
    <p>This image is used as a border in the page design and has a purely decorative purpose.</p>
    <DecorativeImage src={decorativeBar} />
  </div>
);

export default DecorativeImageBar;
