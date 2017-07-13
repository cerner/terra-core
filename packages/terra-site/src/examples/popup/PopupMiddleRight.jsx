import React from 'react';
import Popup from 'terra-popup';
import Button from 'terra-button';
import ExamplePopupContent from './ExamplePopupContent';

class PopupMiddleRight extends React.Component {
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
          contentAttachment="middle right"
          isArrowDisplayed
          isOpen={this.state.open}
          targetRef={() => document.getElementById('popup-middle-right')}
          onRequestClose={this.handleRequestClose}
        >
          <ExamplePopupContent onChange={this.handleOnChange} />
        </Popup>
        <Button id="popup-middle-right" text="Middle-Right" onClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default PopupMiddleRight;
