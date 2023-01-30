const ImageVariant = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
  CIRCLE: 'circle',
  THUMBNAIL: 'thumbnail',
};

const FitTypes = {
  COVER: 'cover',
  SCALEDOWN: 'scale-down',
  FILL: 'fill',
  CONTAIN: 'contain',
  NONE: 'none',
};

const getDecorativeImage = (props) => {
  const customProps = { ...props };
  // removes Aria attributes, role and title from customProps
  Object.keys(customProps).forEach(prop => {
    if (prop.includes('aria') || prop === 'title' || prop === 'role') {
      delete customProps[prop];
    }
  });

  return { ...customProps, role: 'presentation' };
};

const getInformativeImage = (props) => {
  const informativeImageProps = { ...props };
  // removes role attribute if the value is set to `presentation` OR `none`
  if (informativeImageProps.role && (informativeImageProps.role === 'presentation' || informativeImageProps.role === 'none')) {
    delete informativeImageProps.role;
  }

  return { ...informativeImageProps };
};

export {
  FitTypes, ImageVariant, getInformativeImage, getDecorativeImage,
};
