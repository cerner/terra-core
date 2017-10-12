import React from 'react';
import HookshotTemplate from '../HookshotTestTemplate';

class HookshotAttachmentBehaviorFlip extends React.Component {
  constructor(props) {
    super(props);
    this.handlePositionClick = this.handlePositionClick.bind(this);
    this.state = { position: 'primary' };
  }

  handlePositionClick(event) {
    this.setState({ position: event.target.value });
  }

  render() {
    let buttonMarginLeft;
    let boundingWidth;

    if (this.state.position === 'flipped') {
      buttonMarginLeft = '50px';
    } else if (this.state.position === 'pushed') {
      buttonMarginLeft = '60px';
      boundingWidth = '220px';
    }
    return (
      <div>
        <HookshotTemplate
          attachmentBehavior="flip"
          id="attachment-behavior-flip"
          isOpen={false}
          buttonMarginLeft={buttonMarginLeft}
          boundingWidth={boundingWidth}
        />
        <p> Choose the positioning behavior </p>
        <p> Primary position is on the middle right</p>
        <button id="position-primary" value="primary" onClick={this.handlePositionClick}>Primary</button>
        <button id="position-flipped" value="flipped" onClick={this.handlePositionClick}>Flipped</button>
        <button id="position-pushed" value="pushed" onClick={this.handlePositionClick}>Pushed by bounds</button>
      </div>
    );
  }
}

export default HookshotAttachmentBehaviorFlip;
