import React from 'react';
import Popup from '../../../lib/Popup';
import './ClassNamePopup.scss';

class ClassNamePopup extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: false };
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
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
        <Popup
          classNameArrow="terra-TestClass-arrow"
          classNameContent="terra-TestClass-content"
          classNameOverlay="terra-TestClass-overlay"
          contentAttachment="top center"
          contentDimensions="50x 25x"
          isArrowDisplayed
          isOpen={this.state.open}
          onRequestClose={this.handleRequestClose}
          targetRef={this.getButtonNode}
        >
          <p style={{ padding: '5px' }}>The arrow, content, and overlay have classes.</p>
        </Popup>
        <button id="class-name-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Class Name Popup
        </button>
      </div>
    );
  }
}

export default ClassNamePopup;
