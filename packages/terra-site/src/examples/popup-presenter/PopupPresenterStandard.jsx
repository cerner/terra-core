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
    const contentSection = <p style={{height: '200px', width: '400px'}}>i'm popup content, hear me roar!</p>;

    return (
      <div className="terra-Modal" style={{position: 'relative', height: '400px', width: '100%', backgroundColor: '#27de1c', overflow: 'auto'}}>
        <div style={{position: 'relative', height: '1200px', width: '1600px'}}>
          <PopupPresenter 
            content={contentSection}
            contentAttachment="top left"
            isOpen={this.state.open}
            showArrow
            target={<Button text="popup button launcher" onClick={this.handleButtonClick} />}
            onRequestClose={this.handleRequestClose}
            style={{position: 'absolute', top: '500px', left: '700px'}}
            className="drup-test"
            id="asdf"
          />
        </div>
      </div>
    );
  }
}

export default DummyApp;
