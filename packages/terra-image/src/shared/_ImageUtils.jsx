import React from 'react';

const createImage = (customProps, imageClasses, imageProps) => {
  const {
    src, height, width, alt, handleOnLoad, handleOnError, imageRef,
  } = imageProps;

  return (
    <img
      {...customProps}
      src={src}
      alt={alt}
      height={height}
      width={width}
      onLoad={handleOnLoad}
      onError={handleOnError}
      className={imageClasses}
      ref={imageRef}
    />
  );
};

export default createImage;
