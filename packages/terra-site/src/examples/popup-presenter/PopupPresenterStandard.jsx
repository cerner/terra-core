import React from 'react';
import PopupPresenter from 'terra-popup-presenter';
import Button from 'terra-button';

class DummyApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.state = {open: false};
  }

  handleButtonClick(event) {
    this.setState({open: true});
  }

  handleRequestClose(event) {
    this.setState({open: false});
  }

  render() {
    const contentSection = <p>i'm popup content, hear me roar!</p>;

    const constraints = [{to: 'window', attachment: 'together'}];

    return (
      <PopupPresenter 
        constraints={constraints}
        content={contentSection}
        contentAttachment="bottom center"
        isOpen={this.state.open}
        target={<Button text="popup button launcher" onClick={this.handleButtonClick} />}
        targetAttachment="top center"
        onRequestClose={this.handleRequestClose}
      />
    );
  }
}

export default DummyApp;

