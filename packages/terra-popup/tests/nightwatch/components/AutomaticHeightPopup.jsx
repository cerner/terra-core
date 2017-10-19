import React from 'react';
import Popup from '../../../lib/Popup';

class PopupExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: true };
  }

  componentDidMount() {
    this.forceUpdate();
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
      <div style={{ height: '300px', width: '500px', background: 'aliceblue' }}>
        <Popup
          classNameArrow="test-arrow"
          classNameContent="test-content"
          contentHeight="auto"
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <p style={{ height: '400px' }}>This is popup content with a automatic height of 400px.</p>
        </Popup>
        <button id="default-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Default Popup
        </button>
      </div>
    );
  }
}

export default PopupExample;
