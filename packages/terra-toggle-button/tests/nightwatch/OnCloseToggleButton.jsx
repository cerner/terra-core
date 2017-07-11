import React from 'react';
import ToggleButton from '../../lib/ToggleButton';

class OnCloseToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timesClosed: 0 };
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  handleOnClose() {
    this.setState(prevState => ({ timesClosed: prevState.timesClosed + 1 }));
  }

  render() {
    return (
      <div>
        <div id="on-close-event">
          <h3>Times Closed: {this.state.timesClosed}</h3>
        </div>
        <ToggleButton id="onCloseToggleButton" closedButtonText="ToggleButton" onClose={this.handleOnClose}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </ToggleButton>
      </div>
    );
  }
}


export default OnCloseToggleButton;
