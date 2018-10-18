import React from 'react';

import Overlay from '../../../../Overlay';

class OverlayExample extends React.Component {
  constructor() {
    super();
    this.state = { show: true };
    this.handleTriggerOverlay = this.handleTriggerOverlay.bind(this);
    this.handleOnRequestESC = this.handleOnRequestESC.bind(this);
  }

  handleTriggerOverlay() {
    this.setState({ show: true });
  }

  handleOnRequestESC() {
    this.setState({ show: false });
  }

  render() {
    if (this.state.show) {
      return (
        <Overlay isOpen onRequestClose={this.handleOnRequestESC} id="fullscreen_overlay" zIndex="6000">
          <h3>The onRequestClose prop gives the overlay close behaviors.</h3>
          <br />
          <p>Close by clicking inside the overlay or pressing the ESC key.</p>
        </Overlay>
      );
    }
    return null;
  }
}

export default OverlayExample;
