import React from 'react';
import PopupPresenter from 'terra-popup-presenter';
import './PopupPresenterClassName.scss';

class PopupPresenterClassName extends React.Component {
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
          classNameArrow="terra-TestClass-arrow"
          classNameContent="terra-TestClass-content"
          classNameOverlay="terra-TestClass-overlay"
          isArrowDisplayed
          isOpen={this.state.open}
          onRequestClose={this.handleRequestClose}
          targetRef={this.getButtonNode}
        >
          <p>this is popup content</p>
        </PopupPresenter>
        <button id="class-name-button" onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Class Name Popup
        </button>
      </div>
    );
  }
}

export default PopupPresenterClassName;
