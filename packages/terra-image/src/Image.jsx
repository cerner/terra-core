import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Image.scss';

const cx = classNames.bind(styles);

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
   * The source string for the image which will be displayed during loading and in case of src load failure.
   */
  placeholderSrc: PropTypes.string,
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

const defaultProps = {
  variant: 'default',
  isFluid: false,
  alt: ' ',
};

class Image extends React.Component {

  constructor(props) {
    super(props);

    this.state = { isLoading: true, isError: false };

    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.handleOnError = this.handleOnError.bind(this);
  }

  componentWillReceiveProps(newProps) {
    // If a new image is being loaded, reset the state to loading
    if (newProps.src !== this.props.src || newProps.placeholderSrc !== this.props.placeholderSrc) {
      this.setState({ isLoading: true, isError: false });
    }
  }

  handleOnLoad() {
    this.setState({ isLoading: false });
    const onLoad = this.props.onLoad;

    if (onLoad !== undefined) {
      onLoad();
    }
  }

  handleOnError() {
    this.setState({ isLoading: false, isError: true });
    const onError = this.props.onError;

    if (onError !== undefined) {
      onError();
    }
  }

  createPlaceholderImage(customProps, imageClasses) {
    const { placeholderSrc, alt, height, width } = this.props;
    return (
      <img
        src={placeholderSrc}
        alt={alt}
        height={height}
        width={width}
        className={imageClasses}
        {...customProps}
      />
    );
  }

  createImage(customProps, imageClasses) {
    const { src, alt, height, width } = this.props;
    return (
      <img
        src={src}
        alt={alt}
        height={height}
        width={width}
        onLoad={this.handleOnLoad}
        onError={this.handleOnError}
        className={imageClasses}
        {...customProps}
      />
    );
  }

  render() {
    const { src, variant, isFluid, alt, placeholderSrc, height, width, onLoad, onError, ...customProps } = this.props;

    const imageClasses = cx([
      'image',
      variant,
      customProps.className,
      { fluid: isFluid },
    ]);
    delete customProps.className;

    if (placeholderSrc) {
      if (this.state.isLoading) {
        return (
          <div>
            <div className={cx('hidden')}>{this.createImage(customProps, imageClasses)}</div>
            <div>{this.createPlaceholderImage(customProps, imageClasses)}</div>
          </div>
        );
      }

      return (
        <div>
          <div>
            {
              this.state.isError ?
                this.createPlaceholderImage(customProps, imageClasses) :
                this.createImage(customProps, imageClasses)
            }
          </div>
        </div>
      );
    }

    return (
      <div>
        <div>{this.createImage(customProps, imageClasses)}</div>
      </div>
    );
  }
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
