import React from 'react';
import Image from 'terra-image';
import phone from '../assets/phone.png';

const InformativeImage = () => (
  <div>
    <h2>Image used to label other information.</h2>
    <p>This example shows two image icons – one of a telephone. A phone number follows each image. Consistent with the visual presentation, the text alternatives “Telephone:” `alt="Telephone:"` is used to identify the device associated with each number.</p>
    <Image src={phone} alt="Telephone:" /> <span> 0123 456 7890 </span>
  </div>
);

export default InformativeImage;
