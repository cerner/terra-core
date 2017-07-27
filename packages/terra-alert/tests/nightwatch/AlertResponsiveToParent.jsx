import React from 'react';
import Base from 'terra-base';
import Button from 'terra-button';
import Alert from '../../lib/Alert';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

class AlertResponsiveToParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionButtonClickCount: 0,
      isDismissed: false,
    };
    this.actionFunc = this.actionFunc.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  actionFunc() {
    const newState = this.state;
    newState.actionButtonClickCount += 1;
    this.setState(newState);
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
      alertElem = <Alert id="dismissibleAlert" type={Alert.Opts.Types.SUCCESS} onDismiss={this.handleDismiss} >{alertText}</Alert>;
    }
    return (
      <div style={{ width: '500px', border: '1px solid black', padding: '5px' }}>
        <h3>Alerts with actions in a small container (500px wide) that will cause the action section of the alert
            to render below the message instead of beside it.</h3>
        <br />
        <Base locale={locale}>
          <Alert id="actionAlert" type={Alert.Opts.Types.WARNING} action={<Button text="Action" size="medium" variant="primary" onClick={this.actionFunc} />} >
            This is a warning. It is configured with a custom Action button.
          </Alert>
          <br />
          <p>Action button has been clicked {this.state.actionButtonClickCount} times.</p>
          <br />
          <br />
          {alertElem}
          <br />
          <br />
          <Alert id="noActionsAlert" type={Alert.Opts.Types.INFO} >This is an info alert</Alert>
        </Base>
      </div>
    );
  }
}

export default AlertResponsiveToParent;
