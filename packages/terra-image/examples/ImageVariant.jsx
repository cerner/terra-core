import React from 'react';
import Image from '../src/Image';

const ImageVariant = () => (
  <div>
    <h2>Default Image Style</h2>
    <Image src="http://lorempixel.com/320/320/nature/" alt="example of defualt styles" variant="default" />
    <br />
    <br />
    <h2>Circle Style</h2>
    <Image src="http://lorempixel.com/320/320/nature/" alt="example of circle styles" variant="circle" />
    <br />
    <br />
    <h2>Rounded Style</h2>
    <Image src="http://lorempixel.com/320/320/nature/" alt="example of rounded styles" variant="rounded" />
    <br />
    <br />
    <h2>Thumbnail Style</h2>
    <Image src="http://lorempixel.com/320/320/nature/" alt="example of thumbnail styles" variant="thumbnail" />
  </div> 
);

export default ImageVariant;
