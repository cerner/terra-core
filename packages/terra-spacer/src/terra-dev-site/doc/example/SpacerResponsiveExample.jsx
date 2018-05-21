import React from 'react';
import Image from 'terra-image';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Spacer from 'terra-spacer/lib/Spacer';
import placeholderPic150x150 from 'terra-spacer/lib/terra-dev-site/doc/example/assets/150x150.jpg';
import placeholderPic1000x200 from 'terra-spacer/lib/terra-dev-site/doc/example/assets/1000x200.png';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const SpacerResponsiveExample = () => (
  <div>
    <Image src={placeholderPic150x150} alt={placeholderPic1000x200} />
    <Spacer marginTop="small-1" bps={{ 768: { marginTop: 'large+4' } }} >
      <Image src={placeholderPic150x150} alt={placeholderPic1000x200} />
    </Spacer>
  </div>
);

export default SpacerResponsiveExample;
