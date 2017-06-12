import React from 'react';
import Alert from 'terra-alert';

class DismissibleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDismissed: false,
    };
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss() {
    const newState = this.state;
    newState.isDismissed = true;
    this.setState(newState);
  }

  render() {
    const alertStartTagStr = '<Alert type={Alert.Types.CONFIRMATION} onDismiss={this.handleDismiss} >';
    const alertEndTagStr = '</Alert>';
    let alertElem = '';
    if (!this.state.isDismissed) {
      alertElem = <Alert type={Alert.Types.CONFIRMATION} onDismiss={this.handleDismiss} >This is a confirmation. It is configured to be dismissible. Click on the Dismiss button to dismiss the alert.</Alert>;
    }
    return (
      <div>
        <div dir="ltr">
          <h3>Alert of type confirmation that is dismissible</h3>
          <br />
          <code>
            {alertStartTagStr}
            <br />
              &nbsp;&nbsp;This is a confirmation. It is configured to be dismissible. Click on the Dismiss button to dismiss the alert.
            <br />
            {alertEndTagStr}
          </code>
        </div>
        <br />
        {alertElem}
      </div>
    );
  }
}

export default DismissibleExample;
