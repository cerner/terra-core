import React from 'react';
import BaseImage from './_BaseImage';

const InformativeImage = (props) => {
  console.log('i am informative image');
  const customProps = { ...props };
  // removes role attribute if the value is set to `presentation` OR `none`
  if (customProps.role && (customProps.role === 'presentation' || customProps.role === 'none')) {
    delete customProps.role;
  }
  return <BaseImage {...customProps} />;
};

export default InformativeImage;
