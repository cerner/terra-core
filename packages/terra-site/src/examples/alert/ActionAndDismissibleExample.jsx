import React from 'react';
import Alert, { AlertTypes } from 'terra-alert';
import Button from 'terra-button';

class ActionAndDismissibleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDismissed: false,
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
    // eslint-disable-next-line no-alert
    alert('Action performed');
    this.state = {
      isDismissed: false,
    };
  }

  render() {
    const alertStartTagStr = '<Alert type={AlertTypes.CUSTOM} onDismiss={this.handleDismiss} customStatusColor="orange" alertAction={<Button text="Action" size="medium" variant="primary" onClick={this.actionFunc} />} >';
    const alertEndTagStr = '</Alert>';
    let alertElem = '';
    if (!this.state.isDismissed) {
      alertElem = (
        <Alert type={AlertTypes.CUSTOM} onDismiss={this.handleDismiss} customStatusColor="orange" alertAction={<Button text="Action" size="medium" variant="primary" onClick={this.actionFunc} />} >
          This is a a custom alert with no icon. It is configured to be dismissible and with a custom action button. Click on the Dismiss button to dismiss the alert.
        </Alert>
      );
    }
    return (
      <div>
        <div dir="ltr">
          <h3>Alert of type custom with no icon that is dismissible and has an action button</h3>
          <br />
          <code>
            {alertStartTagStr}
            <br />
                &nbsp;&nbsp;This is an advisory. It is configured to be dismissible and with a custom action button. Click on the Dismiss button to dismiss the alert.
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

export default ActionAndDismissibleExample;
