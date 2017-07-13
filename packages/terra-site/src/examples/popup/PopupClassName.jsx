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
    this.state = { open: false };
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
      <div>
        <Popup
          classNameArrow="terra-ExampleClass-arrow"
          classNameContent="terra-ExampleClass-content"
          classNameOverlay="terra-ExampleClass-overlay"
          isArrowDisplayed
          isOpen={this.state.open}
          onRequestClose={this.handleRequestClose}
          targetRef={() => document.getElementById('popup-class-name')}
        >
          <ExamplePopupContent onChange={this.handleOnChange} />
        </Popup>
        <Button id="popup-class-name" text="Class Name Popup" onClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default PopupClassName;
