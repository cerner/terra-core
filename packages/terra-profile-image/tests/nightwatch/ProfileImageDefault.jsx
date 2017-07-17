import React from 'react';

import ProfileImage from '../../lib/ProfileImage';
import exampleProfilePhoto from '../assets/150x150.jpg';

class ProfileImageDefault extends React.Component {
  constructor(props) {
    super(props);

    this.state = { errorImageId: undefined, loadedImageId: undefined };
  }

  render() {
    return (
      <div>
        <h2>Profile Image Loading Examples</h2>
        <p>Profile image is successfully loaded.</p>
        <div>
          <ProfileImage
            id={this.state.loadedImageId}
            src={exampleProfilePhoto}
            width="75"
            height="75"
            onLoad={() => { this.setState({ loadedImageId: 'loadedImage' }); }}
          />
        </div>
        <p>Profile image is not found and fails to load.</p>
        <div>
          <ProfileImage
            id={this.state.errorImageId}
            src="invalid.jpg"
            width="75"
            height="75"
            onError={() => { this.setState({ errorImageId: 'errorImage' }); }}
          />
        </div>
      </div>
    );
  }
}

export default ProfileImageDefault;
