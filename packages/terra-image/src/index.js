import Image from './Image';
import DecorativeImage from './variants/_DecorativeImage';

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

export default Image;
export { DecorativeImage, ImageVariant, FitTypes };
