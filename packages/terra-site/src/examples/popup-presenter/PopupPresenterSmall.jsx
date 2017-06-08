import React from 'react';
import PopupPresenter from 'terra-popup-presenter';

class PopupPresenterSmall extends React.Component {
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
          contentDimensions="25x 25x"
          isOpen={this.state.open}
          onRequestClose={this.handleRequestClose}
          targetRef={this.getButtonNode}
        >
          <p>this is popup content</p>
        </PopupPresenter>
        <button id="large-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          25x Popup
        </button>
      </div>
    );
  }
}

export default PopupPresenterSmall;
