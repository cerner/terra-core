import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Alert from 'terra-alert/lib/Alert';

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
    const alertText = 'This is a success alert. It is configured to be dismissible. Click on the Dismiss button to dismiss the alert.';
    let alertElem = '';
    if (!this.state.isDismissed) {
      alertElem = <Alert type="success" onDismiss={this.handleDismiss}>{alertText}</Alert>;
    }
    return alertElem;
  }
}

export default DismissibleExample;
