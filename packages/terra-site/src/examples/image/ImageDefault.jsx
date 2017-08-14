import React from 'react';
import Image from 'terra-image';
import placeholderPic150x150 from '../../assets/150x150.jpg';
import placeholderPic1000x200 from '../../assets/1000x200.png';

const ImageDefault = () => (
  <div>
    <h2>Default</h2>
    <Image src={placeholderPic150x150} alt="default image" />
    <br />
    <h2>Circle</h2>
    <Image src={placeholderPic150x150} alt="circle image" variant="circle" />
    <br />
    <h2>Rounded</h2>
    <Image src={placeholderPic150x150} alt="rounded image" variant="rounded" />
    <br />
    <h2>Thumbnail</h2>
    <Image src={placeholderPic150x150} alt="thumbnail image" variant="thumbnail" />
    <br />
    <h2>Fluid</h2>
    <Image src={placeholderPic1000x200} alt="fluid image" isFluid />
  </div>
);

export default ImageDefault;
