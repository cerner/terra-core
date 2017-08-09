import React from 'react';

import Image from '../../lib/Image';
import placeholder150x150 from '../assets/150x150.jpg';

class ImageLoading extends React.Component {
  constructor(props) {
    super(props);

    this.state = { errorImageId: undefined, loadedImageId: undefined };
  }

  render() {
    return (
      <div>
        <h2>Loading Image Examples</h2>
        <p>Image is successfully loaded.</p>
        <div>
          <Image
            id={this.state.loadedImageId}
            src={placeholder150x150}
            onLoad={() => { this.setState({ loadedImageId: 'loadedImage' }); }}
            onError={() => { this.setState({ errorImageId: 'errorImage' }); }}
          />
        </div>
        <p>Image fails to load.</p>
        <div>
          <Image
            id={this.state.errorImageId}
            src="invalid.jpg"
            onLoad={() => { this.setState({ loadedImageId: 'loadedImage' }); }}
            onError={() => { this.setState({ errorImageId: 'errorImage' }); }}
            alt="Alt text for image with invalid source"
          />
        </div>
      </div>
    );
  }
}

export default ImageLoading;
