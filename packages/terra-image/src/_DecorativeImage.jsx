import React from 'react';
import BaseImage from './_BaseImage';

const DecorativeImage = (props) => {
  console.log('i am decorative image');
  const customProps = { ...props };
  // removes Aria attributes and title from customProps
  Object.keys(customProps).forEach(prop => {
    if (prop.includes('aria') || prop === 'title') {
      delete customProps[prop];
    }
  });

  const decorativeImageProps = { ...customProps, role: 'presentation' };
  return <BaseImage {...decorativeImageProps} />;
};

export default DecorativeImage;
