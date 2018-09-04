import React from 'react';
import ShowHide from '../../../ShowHide';

class OnCloseShowHide extends React.Component {
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
        <ShowHide id="onCloseShowHide" preview="ShowHide" onClose={this.handleOnClose}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </ShowHide>
      </div>
    );
  }
}


export default OnCloseShowHide;
