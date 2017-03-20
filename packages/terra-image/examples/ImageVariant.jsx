import React from 'react';
import Image from '../src/Image';

const ImageVariant = () => (
  <div>
    <p>
    <h2>Default Image Style</h2>
    <Image src="http://lorempixel.com/320/320/nature/" alt="example of defualt styles" />
    <br />
    <br />
    <h2>Default Image without alt</h2>
    <Image src="http://lorempixel.com/320/320/nature/" variant="default" />
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
    <br />
    <br />
    <h2>Image with height and width defined</h2>
    <Image src="http://lorempixel.com/320/320/nature/" alt="example of thumbnail styles" variant="thumbnail" height={150} width={200} />
    <br />
    <br />
    <h2>Image with fluid behavior</h2>
    <Image src="http://lorempixel.com/1920/480/nature/" alt="example of thumbnail styles" variant="thumbnail" isFluid />
    <br />
    <br />
    </p>
  </div>
);

export default ImageVariant;
