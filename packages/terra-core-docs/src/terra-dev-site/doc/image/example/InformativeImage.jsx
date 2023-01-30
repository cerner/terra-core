import React from 'react';
import Image from 'terra-image';
import matterhornImage from '../../../common/images/creative-commons/Matterhorn,_March_2019_(01)_150x150.jpg';

const matterhornAlternativeText = 'North-east face of the Matterhorn mountain peak and surrounding landscape covered in snow against a blue sky, located in the Swiss Apps near Zermatt, Switzerland';

const InformativeImage = () => (
  <div>
    <h2>Information provided using Image.</h2>
    <Image src={matterhornImage} alt={matterhornAlternativeText} />
    <p><strong>Matterhorn</strong></p>
  </div>
);

export default InformativeImage;
