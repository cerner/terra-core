import React from 'react';
import HookshotTemplate from '../HookshotTestTemplate';

class HookshotAttachmentBehaviorNone extends React.Component {
  constructor(props) {
    super(props);
    this.handlePositionClick = this.handlePositionClick.bind(this);
    this.state = { position: 'primary' };
  }

  handlePositionClick(event) {
    this.setState({ position: event.target.value });
  }

  render() {
    let margin;

    if (this.state.position === 'pushed') {
      margin = '50px';
    }
    return (
      <div>
        <HookshotTemplate
          attachmentBehavior="none"
          id="attachment-behavior-none"
          isOpen={false}
          buttonMarginLeft={margin}
        />
        <p> Choose the positioning behavior </p>
        <p> Primary position is on the middle right</p>
        <button id="position-primary" value="primary" onClick={this.handlePositionClick}>Primary</button>
        <button id="position-pushed" value="pushed" onClick={this.handlePositionClick}>Pushed by bounds</button>
      </div>
    );
  }
}

export default HookshotAttachmentBehaviorNone;
