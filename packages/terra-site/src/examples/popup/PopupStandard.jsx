import React from 'react';
import Popup from 'terra-popup';
import Button from 'terra-button';

class DummyApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {open: false};
  }

  handleButtonClick(event) {
    this.setState({open: true});
  }

  handleClickOutside(event) {
    this.setState({open: false});
  }

  render() {
    let contentSection;
    if (this.state.open) {
      contentSection = <p>i'm a popup content</p>;
    }

    return (
      <Popup 
        attachment="bottom left"
        content={contentSection}
        enabled
        target={<Button text="popup button launcher" onClick={this.handleButtonClick} />}
        targetAttachment="top right"
        onClickOutside={this.handleClickOutside}
        isOpen={this.state.open}
        >
      </Popup>
    );
  }
}

export default DummyApp;

