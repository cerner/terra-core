import React from 'react';
import Popup from '../../../lib/Popup';
import './ClassNamePopup.scss';

class ClassNamePopup extends React.Component {
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
      <div>
        <Popup
          classNameArrow="terra-test-class-arrow"
          classNameContent="terra-test-class-content"
          classNameOverlay="terra-test-class-overlay"
          contentAttachment="top center"
          isArrowDisplayed
          isOpen={this.state.open}
          onRequestClose={this.handleRequestClose}
          targetRef={this.getButtonNode}
        >
          <p style={{ padding: '5px' }}>The arrow and content have classes.</p>
        </Popup>
        <button id="class-name-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Class Name Popup
        </button>
      </div>
    );
  }
}

export default ClassNamePopup;
