import React from 'react';
import HookshotTemplate from '../HookshotTemplate';

class HookshotExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleTargetAttachment = this.handleTargetAttachment.bind(this);
    this.state = { attachment: 'top left' };
  }

  handleTargetAttachment(event) {
    this.setState({ attachment: event.target.value });
  }

  render() {
    return (
      <div>
        <HookshotTemplate
          id="attachment"
          hookshotContentProps={{ closeOnEsc: false, closeOnOutsideClick: false, closeOnResize: false }}
          contentAttachment="top center"
          targetAttachment={this.state.attachment}
          isOpen
        />
        <p> Content attachement: top center </p>
        <p> Choose the target attachement: </p>
        <button id="attach-TL" value="top left" onClick={this.handleTargetAttachment}>TOP LEFT</button>
        <button id="attach-TC" value="top center" onClick={this.handleTargetAttachment}>TOP CENTER</button>
        <button id="attach-TR" value="top right" onClick={this.handleTargetAttachment}>TOP RIGHT</button>
        <button id="attach-ML" value="middle left" onClick={this.handleTargetAttachment}>MIDDLE LEFT</button>
        <button id="attach-MC" value="middle center" onClick={this.handleTargetAttachment}>MIDDLE CENTER</button>
        <button id="attach-MR" value="middle right" onClick={this.handleTargetAttachment}>MIDDLE RIGHT</button>
        <button id="attach-BL" value="bottom left" onClick={this.handleTargetAttachment}>BOTTOM LEFT</button>
        <button id="attach-BC" value="bottom center" onClick={this.handleTargetAttachment}>BOTTOM CENTER</button>
        <button id="attach-BR" value="bottom right" onClick={this.handleTargetAttachment}>BOTTOM RIGHT</button>
      </div>
    );
  }
}

export default HookshotExample;
