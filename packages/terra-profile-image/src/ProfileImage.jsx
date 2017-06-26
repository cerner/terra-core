import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import TerraImage from 'terra-image';
import avatarImage from './avatar.svg';
import './ProfileImage.scss';

const propTypes = {
  /**
   * The profile image to load.
   */
  image: PropTypes.element.isRequired,
};

const avatarOverrideProps = { src: avatarImage, onLoad: undefined, onError: undefined };

class ProfileImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true, isError: false };

    this.updateImage(props.image.props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps === this.props) {
      return;
    }

    this.updateImage(newProps.image.props);
  }

  updateImage(imageProps) {
    this.avatarImage = new TerraImage(Object.assign({}, imageProps, avatarOverrideProps));

    const profileOverrideProps = {
      onLoad: () => { this.handleOnLoad(imageProps.onLoad); },
      onError: () => { this.handleOnError(imageProps.onError); },
    };
    this.image = new TerraImage(Object.assign({}, imageProps, profileOverrideProps));
  }

  handleOnLoad(originalOnLoad) {
    this.setState({ isLoading: false });
    if (originalOnLoad !== undefined) originalOnLoad();
  }

  handleOnError(originalOnError) {
    this.setState({ isLoading: false, isError: true });
    if (originalOnError !== undefined) originalOnError();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <div className="terra-ProfileImage--hidden">{this.image}</div>
          <div>{this.avatarImage}</div>
        </div>
      );
    }

    return (
      <div>
        <div>{this.state.isError ? this.avatarImage : this.image}</div>
      </div>
    );
  }
}

ProfileImage.propTypes = propTypes;

export default ProfileImage;
