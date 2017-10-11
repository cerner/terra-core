import React from 'react';
import HookshotTemplate from '../HookshotTestTemplate';

class HookshotAttachmentBehaviorAuto extends React.Component {
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
    let buttonMarginTop;

    if (this.state.position === 'flipped') {
      buttonMarginLeft = '50px';
    } else if (this.state.position === '90') {
      boundingWidth = '220px';
      buttonMarginLeft = '60px';
    } else if (this.state.position === '-90') {
      boundingWidth = '220px';
      buttonMarginTop = '100px';
      buttonMarginLeft = '60px';
    } else if (this.state.position === 'pushed') {
      boundingWidth = '220px';
      buttonMarginTop = '100px';
      buttonMarginLeft = '110px';
    }
    return (
      <div>
        <HookshotTemplate
          attachmentBehavior="auto"
          id="attachment-behavior-auto"
          isOpen={false}
          buttonMarginLeft={buttonMarginLeft}
          buttonMarginTop={buttonMarginTop}
          boundingWidth={boundingWidth}
        />
        <p> Choose the positioning behavior </p>
        <p> Primary position is on the middle right</p>
        <button id="position-primary" value="primary" onClick={this.handlePositionClick}>Primary</button>
        <button id="position-flipped" value="flipped" onClick={this.handlePositionClick}>Flipped</button>
        <button id="position-90-deg" value="90" onClick={this.handlePositionClick}>Rotateed 90 Degrees</button>
        <button id="position-neg-90-deg" value="-90" onClick={this.handlePositionClick}>Rotateed -90 Degrees</button>
        <button id="position-pushed" value="pushed" onClick={this.handlePositionClick}>Pushed by bounds</button>
      </div>
    );
  }
}

export default HookshotAttachmentBehaviorAuto;

