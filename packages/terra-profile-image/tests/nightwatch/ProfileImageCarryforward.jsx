import React from 'react';
import Image from 'terra-image';

import ProfileImage from '../../lib/ProfileImage';
import placeholder150x150 from '../assets/150x150.jpg';

class ProfileImageCarryforward extends React.Component {
  constructor(props) {
    super(props);

    this.state = { errorImageId: undefined, loadedImageId: undefined };
  }

  render() {
    return (
      <div>
        <h2>Profile Image Carryforward Examples</h2>
        <p>Profile image is successfully loaded and carries forward the variant and isFluid props.</p>
        <div>
          <ProfileImage
            image={<Image
              id={this.state.loadedImageId}
              src={placeholder150x150}
              variant="rounded"
              isFluid
              width="75"
              height="75"
              onLoad={() => { this.setState({ loadedImageId: 'loadedImage' }); }}
            />}
          />
        </div>
        <p>Profile image is not found and fails to load. The variant and isFluid props are carried forward to the avatar image.</p>
        <div>
          <ProfileImage
            image={<Image
              id={this.state.errorImageId}
              src="invalid.jpg"
              variant="rounded"
              isFluid
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

export default ProfileImageCarryforward;
