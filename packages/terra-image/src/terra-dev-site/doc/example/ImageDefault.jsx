import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Image from 'terra-image/lib/Image';
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
    <br />
    <h2>Placeholder</h2>
    <h3>Invalid src prop (placeholder will show)</h3>
    {/* eslint-disable-next-line react/jsx-no-duplicate-props */}
    <Image src="/mock/failure/route" alt="invalid src attribute image" placeholder={<Image src={placeholderPic1000x200} alt="placeholder image" />} />
    <h3>Valid src prop (src will show)</h3>
    <Image src={placeholderPic150x150} alt="src image" placeholder={<Image src={placeholderPic1000x200} alt="placeholder image" />}  />
  </div>
);

export default ImageDefault;
