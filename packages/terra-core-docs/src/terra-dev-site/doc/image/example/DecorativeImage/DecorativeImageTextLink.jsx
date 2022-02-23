import React from 'react';
import { DecorativeImage } from 'terra-image';
import decorativeImage from '../../assets/crocus.jpg';

const DecorativeImageTextLink = () => (
  <div>
    <h2>Image as part of a text link.</h2>
    <p>This illustration of a crocus bulb is used to make the link easier to identify and to increase the clickable area but doesn’t add to the information already provided in the adjacent link text (of the same anchor). In this case, alt value for the image would be null / empty.</p>
    <DecorativeImage src={decorativeImage} />
  </div>
);

export default DecorativeImageTextLink;
