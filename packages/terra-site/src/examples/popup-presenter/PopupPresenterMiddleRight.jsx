import React from 'react';
import PopupPresenter from 'terra-popup-presenter';
import ExamplePopupContent from './ExamplePopupContent';

class PopupPresenterMiddleRight extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
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

  handleOnChange() {
    this.setState({ open: false });
  }
  
  render() {
    return (
      <div style={{ display: 'inline-block' }} ref={this.setButtonNode}>
        <PopupPresenter
          contentAttachment="middle right"
          isArrowDisplayed
          isOpen={this.state.open}
          targetRef={this.getButtonNode}
          onRequestClose={this.handleRequestClose}
        >
          <ExamplePopupContent onChange={this.handleOnChange} />
        </PopupPresenter>
        <button onClick={this.handleButtonClick}>
          Middle Right Popup
        </button>
      </div>
    );
  }
}

export default PopupPresenterMiddleRight;
