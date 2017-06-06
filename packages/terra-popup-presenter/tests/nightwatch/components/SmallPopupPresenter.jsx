import React from 'react';
import PopupPresenter from '../../../src/PopupPresenter';

class SmallPopupPresenter extends React.Component {
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
        <PopupPresenter
          contentAttachment="bottom left"
          contentDimensions="10x 10x"
          isArrowDisplayed
          isOpen={this.state.open}
          onRequestClose={this.handleRequestClose}
          targetRef={this.getButtonNode}
        >
          <p>this is popup content</p>
        </PopupPresenter>
        <button id="small-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Small Popup
        </button>
      </div>
    );
  }
}

export default SmallPopupPresenter;
