import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const ImageVariant = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
  CIRCLE: 'circle',
  THUMBNAIL: 'thumbnail',
};

const propTypes = {
  /**
   * The source string for the image which will be loaded and displayed.
   */
  src: PropTypes.string.isRequired,
  /**
   * Sets the style of the image from the following values; `default`, `rounded`, `circle`, `thumbnail`.
   */
  variant: PropTypes.oneOf(['default', 'rounded', 'circle', 'thumbnail']),
  /**
   * Sets the fluid behavior of the image, which is `nonfluid` by default.
   */
  isFluid: PropTypes.bool,
  /**
   * The text content that specifies an alternative text for an image.
   */
  alt: PropTypes.string.isRequired,
  /**
   * A React element which will be displayed during loading and in case of src load failure.
   */
  placeholder: PropTypes.element,
  /**
   * Sets the height of the image.
   */
  height: PropTypes.string,
  /**
   * Sets the width of the image.
   */
  width: PropTypes.string,
  /**
   * Function to be executed when the image load is successful.
   */
  onLoad: PropTypes.func,
  /**
   * Function to be executed when the image load errors.
   */
  onError: PropTypes.func,
};

/* eslint-disable react/default-props-match-prop-types */
const defaultProps = {
  variant: 'default',
  isFluid: false,
  alt: ' ',
};
/* eslint-enable react/default-props-match-prop-types */

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isError: false,
      prevPropsSrc: props.src,
    };

    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.handleOnError = this.handleOnError.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.src !== prevState.prevPropsSrc) {
      return {
        isLoading: true,
        isError: false,
        prevPropsSrc: nextProps.src,
      };
    }

    return null;
  }

  handleOnLoad() {
    this.setState({ isLoading: false });
    const { onLoad } = this.props;

    if (onLoad !== undefined) {
      onLoad();
    }
  }

  handleOnError() {
    this.setState({ isLoading: false, isError: true });
    const { onError } = this.props;

    if (onError !== undefined) {
      onError();
    }
  }

  createImage(customProps, imageClasses) {
    const {
      src, alt, height, width,
    } = this.props;
    return (
      <img
        {...customProps}
        src={src}
        alt={alt}
        height={height}
        width={width}
        onLoad={this.handleOnLoad}
        onError={this.handleOnError}
        className={imageClasses}
      />
    );
  }

  render() {
    const {
      src, variant, isFluid, alt, placeholder, height, width, onLoad, onError, ...customProps
    } = this.props;

    const imageClasses = cx([
      'image',
      variant,
      customProps.className,
      { fluid: isFluid },
    ]);
    delete customProps.className;

    if (placeholder) {
      if (this.state.isLoading) {
        return (
          <div>
            <div className={cx('hidden')}>{this.createImage(customProps, imageClasses)}</div>
            <div>{placeholder}</div>
          </div>
        );
      }

      return this.state.isError ? placeholder : this.createImage(customProps, imageClasses);
    }

    return this.createImage(customProps, imageClasses);
  }
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
export { ImageVariant };
