import React from 'react';
import Alert from 'terra-alert';
import Button from 'terra-button';

class ActionAndDismissibleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDismissed: false,
      actionButtonClickCount: 0,
    };
    this.handleDismiss = this.handleDismiss.bind(this);
    this.actionFunc = this.actionFunc.bind(this);
  }

  handleDismiss() {
    const newState = this.state;
    newState.isDismissed = true;
    this.setState(newState);
  }

  actionFunc() {
    const newState = this.state;
    newState.actionButtonClickCount += 1;
    this.setState(newState);
  }

  render() {
    const alertStartTagStr = '<Alert type={Alert.Opts.Types.CUSTOM} onDismiss={this.handleDismiss} customStatusColor="orange" action={<Button text="Action" size="medium" variant="primary" onClick={this.actionFunc} />} >';
    const alertEndTagStr = '</Alert>';
    const alertText = 'This is a a custom alert with no icon or title. It is configured to be dismissible and with a custom action button. Click on the Dismiss button to dismiss the alert.';
    let alertElem = '';
    if (!this.state.isDismissed) {
      alertElem = (
        <Alert type={Alert.Opts.Types.CUSTOM} onDismiss={this.handleDismiss} customStatusColor="orange" action={<Button text="Action" size="medium" variant="primary" onClick={this.actionFunc} />} >
          {alertText}
        </Alert>
      );
    }
    return (
      <div>
        <div dir="ltr">
          <h3>Alert of type custom with no icon or title that is dismissible and has an action button</h3>
          <br />
          <code>
            {alertStartTagStr}
            <br />
            &nbsp;&nbsp;{alertText}
            <br />
            {alertEndTagStr}
          </code>
        </div>
        <br />
        {alertElem}
        <br />
        <p>Action button has been clicked {this.state.actionButtonClickCount} times.</p>
      </div>
    );
  }
}

export default ActionAndDismissibleExample;
