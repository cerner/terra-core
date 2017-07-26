import React from 'react';
import Popup from '../../src/Popup';

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
        <Popup
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
          requestFocus={() => {}}
          releaseFocus={() => {}}
        >
          <p>this is popup content</p>
        </Popup>
        <div style={{ height: '20px', width: '20px' }} ref={this.setButtonNode} />
      </div>
    );
  }
}

export default PopupDefaultExample;
