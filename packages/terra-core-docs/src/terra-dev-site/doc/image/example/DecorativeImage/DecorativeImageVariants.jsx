import React from 'react';
import { DecorativeImage } from 'terra-image';
import decorativeImage from '../../assets/crocus.jpg';
import placeholderPic1000x200 from '../../assets/1000x200.png';

const DecorativeImageVariants = () => (
  <div>
    <h2>Default</h2>
    <DecorativeImage src={decorativeImage} />
    <br />
    <h2>Circle</h2>
    <DecorativeImage src={decorativeImage} variant="circle" />
    <br />
    <h2>Rounded</h2>
    <DecorativeImage src={decorativeImage} variant="rounded" />
    <br />
    <h2>Thumbnail</h2>
    <DecorativeImage src={decorativeImage} variant="thumbnail" />
    <br />
    <h2>Fluid</h2>
    <DecorativeImage src={decorativeImage} isFluid />
    <br />
    <h2>Placeholder</h2>
    <h3>Invalid src prop (placeholder will show)</h3>
    <DecorativeImage src="/mock/failure/route" placeholder={<DecorativeImage src={placeholderPic1000x200} />} />
    <h3>Valid src prop (src will show)</h3>
    <DecorativeImage src={decorativeImage} placeholder={<DecorativeImage src={placeholderPic1000x200} />} />
  </div>
);

export default DecorativeImageVariants;
