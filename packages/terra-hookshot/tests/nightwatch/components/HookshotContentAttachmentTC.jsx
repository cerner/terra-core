import React from 'react';
import HookshotTemplate from '../HookshotTestTemplate';

class HookshotExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleTargetAttachment = this.handleTargetAttachment.bind(this);
    this.state = { attachment: 'top start' };
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

export default HookshotExample;
