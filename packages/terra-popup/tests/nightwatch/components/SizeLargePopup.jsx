import React from 'react';
import Popup from '../../../lib/Popup';

class DimensionPopup extends React.Component {
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
      <div style={{ position: 'relative', height: '100%', width: '100%', overflow: 'scroll' }}>
        <div style={{ height: '950px', width: '1650px', background: 'aliceblue' }} ref={this.setParentNode}>
          <Popup
            boundingRef={this.getParentNode}
            classNameArrow="test-arrow"
            classNameContent="test-content"
            contentHeight="240"
            contentWidth="960"
            isOpen={this.state.open}
            onRequestClose={this.handleRequestClose}
            targetRef={this.getButtonNode}
          >
            <p>This popup is 240h by 960w.</p>
          </Popup>
          <button id="dimension-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
            Large Popup
          </button>
        </div>
      </div>
    );
  }
}

export default DimensionPopup;
