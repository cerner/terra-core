import React from 'react';
import Popup from 'terra-popup';
import Button from 'terra-button';
import ExamplePopupContent from './ExamplePopupContent';
import './PopupClassName.scss';

class PopupClassName extends React.Component {
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
        <Popup
          classNameArrow="terra-ExampleClass-arrow"
          classNameContent="terra-ExampleClass-content"
          classNameOverlay="terra-ExampleClass-overlay"
          isArrowDisplayed
          isOpen={this.state.open}
          onRequestClose={this.handleRequestClose}
          targetRef={this.getButtonNode}
        >
          <ExamplePopupContent onChange={this.handleOnChange} />
        </Popup>
        <Button text="Class Name Popup" onClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default PopupClassName;
