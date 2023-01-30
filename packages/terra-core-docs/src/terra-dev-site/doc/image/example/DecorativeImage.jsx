import React from 'react';
import Image from 'terra-image';
import decorativeBar from '../assets/decorative-bar.png';
import crocus from '../assets/crocus.jpg';

const DecorativeImageBar = () => (
  <div>
    <h2>Image used as part of page design.</h2>
    <p>This image is used as a border in the page design and has a purely decorative purpose.</p>
    <Image src={decorativeBar} />
    <h2>Image as part of a text link.</h2>
    <p>This illustration of a crocus bulb is used to make the link easier to identify and to increase the clickable area but doesn’t add to the information already provided in the adjacent link text (of the same anchor). In this case, alt value for the image would be `null` / `empty`.</p>
    <Image src={crocus} />
    <a href="https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/image/about#examples"><span>Crocus bulbs</span></a>
  </div>
);

export default DecorativeImageBar;
