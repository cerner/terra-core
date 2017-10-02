import React from 'react';
import HookshotTemplate from '../HookshotTemplate';

class HookshotAttachmentMargin extends React.Component {
  constructor(props) {
    super(props);
    this.handleTargetAttachment = this.handleTargetAttachment.bind(this);
    this.state = { attachment: 'middle left' };
  }

  handleTargetAttachment(event) {
    this.setState({ attachment: event.target.value });
  }

  render() {
    let targetAttachment;

    if (this.state.attachment === 'middle left') {
      targetAttachment = 'middle right';
    } else if (this.state.attachment === 'middle right') {
      targetAttachment = 'middle left';
    } else if (this.state.attachment === 'middle center') {
      targetAttachment = 'middle center';
    } else if (this.state.attachment === 'top left') {
      targetAttachment = 'bottom right';
    } else if (this.state.attachment === 'top right') {
      targetAttachment = 'bottom left';
    } else if (this.state.attachment === 'top center') {
      targetAttachment = 'bottom center';
    } else if (this.state.attachment === 'bottom left') {
      targetAttachment = 'top right';
    } else if (this.state.attachment === 'bottom right') {
      targetAttachment = 'top left';
    } else if (this.state.attachment === 'bottom center') {
      targetAttachment = 'top center';
    }
    return (
      <div>
        <HookshotTemplate
          id="attachment-margin"
          attachmentMargin={10}
          targetAttachment={targetAttachment}
          contentAttachment={this.state.attachment}
          isOpen
        />
        <p> Shoulp apply attachment margin appropriately for all attachment points </p>
        <p> Choose the content attachement: </p>
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

export default HookshotAttachmentMargin;
