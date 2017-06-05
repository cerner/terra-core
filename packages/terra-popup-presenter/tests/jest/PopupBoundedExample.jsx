import React from 'react';
import PopupPresenter from '../../src/PopupPresenter';

class PopupPresenterStandard extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.setParentNode = this.setParentNode.bind(this);
    this.getParentNode = this.getParentNode.bind(this);
    this.state = { open: true };
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

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div style={{ height: '200px', width: '200px' }} ref={this.setParentNode}>
        <PopupPresenter
          boundingRef={this.getParentNode}
          isHeaderDisabled
          isOpen={this.state.open}
          onRequestClose={this.handleRequestClose}
          targetRef={this.getButtonNode}
        >
          <p>this is popup content</p>
        </PopupPresenter>
        <div style={{ height: '20px', width: '20px' }} ref={this.setButtonNode} />
      </div>
    );
  }
}

export default PopupPresenterStandard;
