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
    const alertText = 'This is a success alert. It is configured to be dismissible. Click on the Dismiss button to dismiss the alert.';
    if (this.state.isDismissed) {
      return null;
    }

    return (
      <Alert type={Alert.Opts.Types.SUCCESS} onDismiss={this.handleDismiss} >{alertText}</Alert>
    );
  }
}

export default DismissibleExample;
