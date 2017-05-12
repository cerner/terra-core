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
    const contentSection = <p style={{height: '200px', width: '200px'}}>i'm popup content, hear me roar!</p>;

    return (
      <div id="terra-FakeModal" style={{height: '150px', width: '150px', backgroundColor: '#27de1c'}}>
        <PopupPresenter 
          content={contentSection}
          contentAttachment="bottom center"
          isOpen={this.state.open}
          showArrow
          target={<Button text="popup button launcher" onClick={this.handleButtonClick} />}
          targetAttachment="top center"
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default DummyApp;

