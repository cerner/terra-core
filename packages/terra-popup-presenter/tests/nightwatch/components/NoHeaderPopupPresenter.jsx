import React from 'react';
import PopupPresenter from '../../../src/PopupPresenter';

class NoHeaderPopupPresenter extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.setParentNode = this.setParentNode.bind(this);
    this.getParentNode = this.getParentNode.bind(this);
    this.state = { open: false };
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

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div style={{ height: '200px', width: '200px', background: 'aliceblue' }} ref={this.setParentNode}>
        <PopupPresenter
          boundingRef={this.getParentNode}
          isHeaderDisabled
          isOpen={this.state.open}
          onRequestClose={this.handleRequestClose}
          targetRef={this.getButtonNode}
        >
          <p style={{ height: '200px', width: '200px' }}>this is popup content</p>
        </PopupPresenter>
        <button id="no-header-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          No Header Popup
        </button>
      </div>
    );
  }
}

export default NoHeaderPopupPresenter;
