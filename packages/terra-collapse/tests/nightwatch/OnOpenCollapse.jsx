import React from 'react';
import Collapse from '../../lib/Collapse';

class OnOpenCollapse extends React.Component {
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
        <Collapse closedButtonText="Collapse" onOpen={this.handleOnOpen}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Collapse>
      </div>
    );
  }
}


export default OnOpenCollapse;
