import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import TerraImage from 'terra-image';
import avatarImage from './avatar.svg';
import './ProfileImage.scss';

/* eslint react/no-unused-prop-types: [0] */
const propTypes = {
  /**
   * The source for the image which will be displayed.
   */
  src: PropTypes.string.isRequired,
  /**
   * The text content that specifies an alternative text for an image.
   */
  alt: PropTypes.string,
  /**
   * Sets the height of the image.
   */
  height: PropTypes.string,
  /**
   * Sets the width of the image.
   */
  width: PropTypes.string,
  /**
   * Function to be executed when the profile image load is successful.
   */
  onLoad: PropTypes.func,
  /**
   * Function to be executed when the profile image load errors.
   */
  onError: PropTypes.func,
};

const avatarOverrideProps = { src: avatarImage, onLoad: undefined, onError: undefined };

class ProfileImage extends React.Component {
  static createAvatarImage(props) {
    return new TerraImage(Object.assign({}, props, avatarOverrideProps));
  }

  constructor(props) {
    super(props);

    this.state = { isLoading: true, isError: false };
  }

  componentWillReceiveProps(newProps) {
    // If a new image is being loaded, reset the state to loading
    if (newProps.src !== this.props.src) {
      this.setState({ isLoading: true, isError: false });
    }
  }

  handleOnLoad(onLoad) {
    this.setState({ isLoading: false });
    if (onLoad !== undefined) {
      onLoad();
    }
  }

  handleOnError(onError) {
    this.setState({ isLoading: false, isError: true });
    if (onError !== undefined) {
      onError();
    }
  }

  createProfileImage(props) {
    const profileOverrideProps = {
      onLoad: () => { this.handleOnLoad(props.onLoad); },
      onError: () => { this.handleOnError(props.onError); },
    };
    return new TerraImage(Object.assign({}, props, profileOverrideProps));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <div className="terra-ProfileImage--hidden">{this.createProfileImage(this.props)}</div>
          <div>{ProfileImage.createAvatarImage(this.props)}</div>
        </div>
      );
    }

    return (
      <div>
        <div>{this.state.isError ? ProfileImage.createAvatarImage(this.props) : this.createProfileImage(this.props)}</div>
      </div>
    );
  }
}

ProfileImage.propTypes = propTypes;

export default ProfileImage;
