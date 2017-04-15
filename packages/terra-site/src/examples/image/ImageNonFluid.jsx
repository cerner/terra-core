import React from 'react';
import Image from 'terra-image';

const imagecontainerStyle1 = {
  backgroundColor: '#ffe4c4',
  width: 200,
  height: 200,
};
const imagecontainerStyle2 = {
  backgroundColor: '#ffe4c4',
  width: 100,
  height: 200,
};
const imagecontainerStyle3 = {
  backgroundColor: '#ffe4c4',
  width: 200,
  height: 100,
  marginBottom: 100,
};

const ImageNonFluid = () => (
  <div>
    <h2>Non Fluid Examples</h2>
    <p>Image width and height are smaller than container.</p>
    <div style={imagecontainerStyle1}>
      <Image src="http://lorempixel.com/150/150/nature/" alt="rounded" variant="rounded" />
    </div>
    <p>Image width is larger than the container. Image height is smaller than the container.</p>
    <div style={imagecontainerStyle2}>
      <Image src="http://lorempixel.com/150/150/nature/" alt="rounded" variant="rounded" />
    </div>
    <p>Image width is smaller than the container. Image height is larger than the container.</p>
    <div style={imagecontainerStyle3}>
      <Image src="http://lorempixel.com/150/150/nature/" alt="rounded" variant="rounded" />
    </div>
  </div>
);

export default ImageNonFluid;
