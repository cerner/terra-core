import React from 'react';
import Popup from '../../../lib/Popup';

class AlignmentPopup extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleAttachment = this.handleAttachment.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.setParentNode = this.setParentNode.bind(this);
    this.getParentNode = this.getParentNode.bind(this);
    this.state = { open: false, attachment: 'bottom left' };
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  setParentNode(node) {
    this.parentNode = node;
  }

  getParentNode() {
    return this.parentNode;
  }

  handleAttachment(event) {
    this.setState({ attachment: event.target.value, open: true });
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <div style={{ position: 'relative', height: '200px', width: '200px', background: 'aliceblue' }} ref={this.setParentNode}>
          <Popup
            boundingRef={this.getParentNode}
            classNameArrow="test-arrow"
            classNameContent="test-content"
            contentAttachment={this.state.attachment}
            contentHeight="80"
            contentWidth="160"
            isArrowDisplayed
            isOpen={this.state.open}
            onRequestClose={this.handleRequestClose}
            targetRef={this.getButtonNode}
          >
            <p style={{ padding: '5px' }}>This popup arrow has vertical attachment.</p>
          </Popup>
          <button id="alignment-button" style={{ position: 'absolute', left: 'calc(50% - 10px)', top: 'calc(50% - 10px)', height: '20px', width: '20px', backgroundColor: '#c00' }} onClick={this.handleButtonClick} ref={this.setButtonNode} />
        </div>
        <p>Choose Content Attachment:</p>
        <button id="attach-Left" value="bottom left" onClick={this.handleAttachment}>Attach Bottom Left</button>
        <button id="attach-Center" value="bottom center" onClick={this.handleAttachment}>Attach Bottom Center</button>
        <button id="attach-Right" value="bottom right" onClick={this.handleAttachment}>Attach Bottom Right</button>
      </div>
    );
  }
}

export default AlignmentPopup;
