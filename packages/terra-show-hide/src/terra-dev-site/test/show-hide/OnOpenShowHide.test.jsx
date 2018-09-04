import React from 'react';
import ShowHide from '../../../ShowHide';

class OnOpenShowHide extends React.Component {
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
        <ShowHide id="onOpenShowHide" preview="ShowHide" onOpen={this.handleOnOpen}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </ShowHide>
      </div>
    );
  }
}


export default OnOpenShowHide;
