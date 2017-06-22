import React from 'react';
import Image from 'terra-image';

import ProfileImage from '../../lib/ProfileImage';
import placeholder150x150 from '../assets/150x150.jpg';

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
            image={<Image
              id={this.state.loadedImageId}
              src={placeholder150x150}
              width="75"
              height="75"
              onLoad={() => { this.setState({ loadedImageId: 'loadedImage' }); }}
            />}
          />
        </div>
        <p>Profile image is not found and fails to load.</p>
        <div>
          <ProfileImage
            image={<Image
              id={this.state.errorImageId}
              src="invalid.jpg"
              width="75"
              height="75"
              onError={() => { this.setState({ errorImageId: 'errorImage' }); }}
            />}
          />
        </div>
      </div>
    );
  }
}

export default ProfileImageDefault;
