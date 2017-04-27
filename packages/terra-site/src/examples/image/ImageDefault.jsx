import React from 'react';
import Image from 'terra-image';

const ImageDefault = () => (
  <div>
    <h2>Default</h2>
    <Image src="http://lorempixel.com/150/150/nature/" alt="default image" />
    <h2>Circle</h2>
    <Image src="http://lorempixel.com/150/150/nature/" alt="circle image" variant="circle" />
    <h2>Rounded</h2>
    <Image src="http://lorempixel.com/150/150/nature/" alt="rounded image" variant="rounded" />
    <h2>Thumbnail</h2>
    <Image src="http://lorempixel.com/150/150/nature/" alt="thumbnail image" variant="thumbnail" />
    <h2>Fluid</h2>
    <Image src="http://placehold.it/1000x200" alt="fluid image" isFluid />
  </div>
);

export default ImageDefault;
