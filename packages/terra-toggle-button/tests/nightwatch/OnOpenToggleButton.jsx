import React from 'react';
import ToggleButton from '../../lib/ToggleButton';

class OnOpenToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timesOpened: 0 };
    this.handleOnOpen = this.handleOnOpen.bind(this);
  }

  handleOnOpen() {
    this.setState(prevState => ({ timesOpened: prevState.timesOpened + 1 }));
  }

  render() {
    return (
      <div>
        <div id="on-open-event">
          <h3>Times Opened: {this.state.timesOpened}</h3>
        </div>
        <ToggleButton id="onOpenToggleButton" closedButtonText="ToggleButton" onOpen={this.handleOnOpen}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </ToggleButton>
      </div>
    );
  }
}


export default OnOpenToggleButton;
