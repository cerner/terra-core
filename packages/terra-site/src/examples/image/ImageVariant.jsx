import React from 'react';
import Image from 'terra-image';

const ImageVariant = () => (
  <div>
    <p>Default Image Style</p>
    <Image src="http://lorempixel.com/320/320/nature/" alt="example of default styles" />
    <p>Default Image without alt</p>
    <Image src="http://lorempixel.com/320/320/nature/" variant="default" />
    <p>Circle Style</p>
    <Image src="http://lorempixel.com/320/320/nature/" alt="example of circle styles" variant="circle" />
    <p>Rounded Style</p>
    <Image src="http://lorempixel.com/320/320/nature/" alt="example of rounded styles" variant="rounded" />
    <p>Thumbnail Style</p>
    <Image src="http://lorempixel.com/320/320/nature/" alt="example of thumbnail styles" variant="thumbnail" />
    <p>Image with height and width defined</p>
    <Image src="http://lorempixel.com/320/320/nature/" alt="example of thumbnail styles" variant="thumbnail" height={150} width={200} />
    <p>Image with fluid behavior</p>
    <Image src="http://lorempixel.com/1920/480/nature/" alt="example of thumbnail styles" variant="thumbnail" isFluid />
  </div>
);

export default ImageVariant;
