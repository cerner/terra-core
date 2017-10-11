import React from 'react';
import HookshotTemplate from '../HookshotTestTemplate';

class HookshotAttachmentMargin extends React.Component {
  constructor(props) {
    super(props);
    this.handleTargetAttachment = this.handleTargetAttachment.bind(this);
    this.state = { attachment: 'middle start' };
  }

  handleTargetAttachment(event) {
    this.setState({ attachment: event.target.value });
  }

  render() {
    let targetAttachment;

    if (this.state.attachment === 'middle start') {
      targetAttachment = 'middle end';
    } else if (this.state.attachment === 'middle end') {
      targetAttachment = 'middle start';
    } else if (this.state.attachment === 'middle center') {
      targetAttachment = 'middle center';
    } else if (this.state.attachment === 'top start') {
      targetAttachment = 'bottom end';
    } else if (this.state.attachment === 'top end') {
      targetAttachment = 'bottom start';
    } else if (this.state.attachment === 'top center') {
      targetAttachment = 'bottom center';
    } else if (this.state.attachment === 'bottom start') {
      targetAttachment = 'top end';
    } else if (this.state.attachment === 'bottom end') {
      targetAttachment = 'top start';
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
        <button id="attach-TS" value="top start" onClick={this.handleTargetAttachment}>TOP START</button>
        <button id="attach-TC" value="top center" onClick={this.handleTargetAttachment}>TOP CENTER</button>
        <button id="attach-TE" value="top end" onClick={this.handleTargetAttachment}>TOP END</button>
        <button id="attach-MS" value="middle start" onClick={this.handleTargetAttachment}>MIDDLE START</button>
        <button id="attach-MC" value="middle center" onClick={this.handleTargetAttachment}>MIDDLE CENTER</button>
        <button id="attach-ME" value="middle end" onClick={this.handleTargetAttachment}>MIDDLE END</button>
        <button id="attach-BS" value="bottom start" onClick={this.handleTargetAttachment}>BOTTOM START</button>
        <button id="attach-BC" value="bottom center" onClick={this.handleTargetAttachment}>BOTTOM CENTER</button>
        <button id="attach-BE" value="bottom end" onClick={this.handleTargetAttachment}>BOTTOM END</button>
      </div>
    );
  }
}

export default HookshotAttachmentMargin;
