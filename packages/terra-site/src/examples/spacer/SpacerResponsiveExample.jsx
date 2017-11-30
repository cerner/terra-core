/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Spacer from 'terra-spacer';
import Image from 'terra-image';
import placeholderPic150x150 from '../../assets/150x150.jpg';
import placeholderPic1000x200 from '../../assets/1000x200.png';

const SpacerResponsiveExample = () => (
  <div>
    <Image src={placeholderPic150x150} alt={placeholderPic1000x200} />
    <Spacer marginTop="small-1" bps={{ 768: { marginTop: 'large+4' } }} >
      <Image src={placeholderPic150x150} alt={placeholderPic1000x200} />
    </Spacer>
  </div>
);

export default SpacerResponsiveExample;
