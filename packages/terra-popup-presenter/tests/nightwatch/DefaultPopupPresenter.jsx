import React from 'react';
import PopupPresenter from '../../lib/PopupPresenter';

class DefaultPopupPresenter extends React.Component {
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
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <p>this is popup content</p>
        </PopupPresenter>
        <div id="default-popup-button" onClick={this.handleButtonClick} style={{ height: '20px', width: '20px' }} ref={this.setButtonNode} />
      </div>
    );
  }
}

export default DefaultPopupPresenter;
