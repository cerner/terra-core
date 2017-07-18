import React from 'react';
import Popup from '../../../lib/Popup';

class BoundedPopup extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.setParentNode = this.setParentNode.bind(this);
    this.getParentNode = this.getParentNode.bind(this);
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
      <div style={{ height: '175px', width: '450px', background: 'aliceblue' }} ref={this.setParentNode}>
        <Popup
          boundingRef={this.getParentNode}
          contentHeight="480"
          classNameArrow="test-arrow"
          classNameContent="test-content"
          isOpen={this.state.open}
          onRequestClose={this.handleRequestClose}
          targetRef={this.getButtonNode}
        >
          <p style={{ padding: '5px' }}>This popup is bounded by height.</p>
        </Popup>
        <button id="bounded-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Bounded Height
        </button>
      </div>
    );
  }
}

export default BoundedPopup;
