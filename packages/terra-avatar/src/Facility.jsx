import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Utils from './common/AvatarUtils';
import styles from './common/Avatar.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Specifies the alternative text for the image.
   */
  alt: PropTypes.string.isRequired,
  /**
   * Sets the background color. Defaults to `auto`. Color variants are theme specific.
   * Accepted values: `'auto'`, `'neutral'`, `'one'`, `'two'`, `'three'`, `'four'`, `'five'`, `'six'`, `'seven'`, `'eight'`, `'nine'`, `'ten'`.
   */
  color: PropTypes.oneOf(['auto', 'neutral', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine', 'ten']),
  /**
   * Value used for the hash function when color is set to `auto`. If not provided, hash function utilizes alt.
   */
  hashValue: PropTypes.string,
  /**
   * Overrides the default height.
   */
  height: PropTypes.string,
  /**
   * The image to display.
   */
  image: PropTypes.string,
  /**
   * Whether to hide avatar from the accessiblity API.
   */
  isAriaHidden: PropTypes.bool,
  /**
   * Overrides the default width.
   */
  width: PropTypes.string,
};

const defaultProps = {
  color: 'auto',
  hashValue: undefined,
  height: undefined,
  image: undefined,
  isAriaHidden: false,
  width: undefined,
};

class Facility extends React.Component {
  constructor(props) {
    super(props);

    // If image has been provided we need to generate the image to display and store it in the state
    if (props.image) {
      const { alt, image, isAriaHidden } = props;

      const imageComponent = Utils.generateImage(image, alt, isAriaHidden, Utils.AvatarVariants.FACILITY);
      this.state = { imageComponent };
    }
  }

  componentWillReceiveProps(newProps) {
    // If we have an image to display (they take precedence) and one of its attributes have changed
    if (newProps.image && (newProps.image !== this.props.image || newProps.alt !== this.props.alt)) {
      const { alt, image, isAriaHidden } = newProps;

      const imageComponent = Utils.generateImage(image, alt, isAriaHidden, Utils.AvatarVariants.FACILITY);
      this.setState({ imageComponent });
    }
  }

  render() {
    const {
      alt,
      color,
      hashValue,
      height,
      image,
      isAriaHidden,
      width,
      ...customProps
    } = this.props;

    const colorVariant = Utils.setColor(alt, color, hashValue);
    const attributes = Object.assign({}, customProps);
    const facilityClassNames = cx([
      'avatar',
      `${colorVariant}`,
      attributes.className,
    ]);

    let facilityContent;
    if (image) {
      facilityContent = this.state.imageComponent;
    } else {
      facilityContent = Utils.generateImagePlaceholder(alt, isAriaHidden, Utils.AvatarVariants.FACILITY);
    }

    return (
      <div {...attributes} className={facilityClassNames} style={{ height, width }}>
        {facilityContent}
      </div>
    );
  }
}

Facility.propTypes = propTypes;
Facility.defaultProps = defaultProps;

export default Facility;
