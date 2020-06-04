import React from 'react';
import PropTypes from 'prop-types';
import objectFitImages from 'object-fit-images'; // Added polyfill for IE.
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Image.module.scss';

const cx = classNamesBind.bind(styles);

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
  /**
  * Sets the `object-fit` style of the image from the following values; `cover`, `contain`, `fill`, `scale-down`, `none`.
  */
  fit: PropTypes.oneOf(['cover', 'scale-down', 'fill', 'contain', 'none']),
};

/* eslint-disable react/default-props-match-prop-types */
const defaultProps = {
  variant: 'default',
  isFluid: false,
  alt: ' ',
  fit: 'fill',
};
/* eslint-enable react/default-props-match-prop-types */

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.ImageRef = React.createRef();

    this.state = {
      isLoading: true,
      isError: false,
      prevPropsSrc: props.src,
    };

    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.handleOnError = this.handleOnError.bind(this);
  }

  componentDidUpdate() {
    objectFitImages(this.ImageRef.current);
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
        ref={this.ImageRef}
      />
    );
  }

  render() {
    const {
      src, variant, isFluid, alt, placeholder, height, width, onLoad, onError, fit, ...customProps
    } = this.props;

    const theme = this.context;

    const imageClasses = classNames(
      cx(
        'image',
        fit,
        variant,
        theme.className,
        { fluid: isFluid },
        { hidden: placeholder && this.state.isLoading },
      ),
      customProps.className,
    );

    delete customProps.className;
    if (!this.state.isLoading) {
      objectFitImages(this.ImageRef.current);
    }
    if (placeholder) {
      if (this.state.isLoading) {
        return (
          <>
            {this.createImage(customProps, imageClasses)}
            {placeholder}
          </>
        );
      }

      return this.state.isError ? placeholder : this.createImage(customProps, imageClasses);
    }

    return this.createImage(customProps, imageClasses);
  }
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;
Image.contextType = ThemeContext;

export default Image;
export { ImageVariant, FitTypes };
