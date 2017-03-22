/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import Button from 'terra-button';
import Overlay from '../src/Overlay';
import './OverlayThemes.scss';

const content = (
  <p style={{ padding: '50px 50px', color: 'white' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus velit non vehicula gravida. Nullam tempor erat at eros interdum, eget sodales mi finibus. Donec ac lorem enim. Donec imperdiet arcu sit amet interdum egestas. Aliquam quam quam, accumsan et egestas sed, imperdiet et purus. Vestibulum lacus ante, pulvinar sit amet turpis non, ultrices molestie nunc. Nam mollis pharetra felis sit amet eleifend. Nunc sagittis aliquet efficitur. Integer gravida, augue in mollis ultrices, felis diam maximus turpis, vitae pretium augue libero sit amet leo. Curabitur vel magna ac nulla laoreet viverra ac et mauris. In eleifend ex quis ipsum tristique, ut efficitur ligula luctus. Nullam id pretium nisl. Sed nec vehicula dolor, quis facilisis odio. Sed volutpat magna ut tincidunt fermentum. Mauris cursus metus id laoreet consectetur.
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc nisl ipsum, laoreet nec tincidunt ut, sodales eget tortor. Pellentesque pharetra mauris eget dignissim lobortis. Mauris nec convallis nunc. Morbi in accumsan lectus, a ultrices elit. Donec pharetra tristique tortor, in consectetur massa commodo auctor. Maecenas at sollicitudin odio, in vehicula arcu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    Aliquam mattis urna et nulla suscipit, id consequat dolor gravida. Cras varius purus eu massa aliquet, nec suscipit erat volutpat. In sit amet cursus tellus. Sed sit amet massa id metus sagittis ornare at eu ligula. Donec nec mi vel ipsum vulputate porta. Integer et justo urna. Donec scelerisque hendrerit felis at finibus. Duis in est ac nulla sodales luctus non vitae lectus. Suspendisse vel libero vel nisl accumsan dapibus ac non ipsum.
  </p>
);

class OverlayStyle extends Component {
  constructor() {
    super();
    this.state = { isOpen: false, isOpen1: false };
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  toggleOverlay() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div style={{ padding: '0 10px' }}>
        <Button onClick={this.toggleOverlay} text="Weight Tracker" />
        <Overlay
          isOpen={this.state.isOpen}
          onRequestClose={this.toggleOverlay}
          className="Overlay--PHA"
        >
          {content}
        </Overlay>
      </div>
    );
  }
}

export default OverlayStyle;
