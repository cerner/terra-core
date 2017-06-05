import React from 'react';
import PopupPresenter from '../../src/PopupPresenter';

class PopupDefaultExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: true };
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
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
        <div style={{ height: '20px', width: '20px' }} ref={this.setButtonNode} />
      </div>
    );
  }
}

export default PopupDefaultExample;
