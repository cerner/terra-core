import React from 'react';
import PropTypes from 'prop-types';
import objectFitImages from 'object-fit-images'; // Added polyfill for IE.
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Image.module.scss';
import {
  getDecorativeImage, getInformativeImage, ImageVariant, FitTypes,
} from './_imageHelper';

const cx = classNamesBind.bind(styles);

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
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * The text content that specifies an alternative text for an image.
   * `alt` prop helps to provide meaningfull context for images and should be used for creating informative images. For decorative images `alt` prop can be ignored.
   *  whenever `alt` prop is empty OR not defined image will be marked as decorative by default and ignored by Assistive Tools.
   */
  alt: PropTypes.string,
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

const defaultProps = {
  variant: 'default',
  isFluid: false,
  fit: 'fill',
};

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
    } = customProps;

    const imageProps = (alt !== undefined && alt?.trim() !== '') ? getInformativeImage(customProps) : getDecorativeImage(customProps);

    return (
      <img
        {...imageProps}
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
      variant, isFluid, placeholder, fit, ...customProps
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
