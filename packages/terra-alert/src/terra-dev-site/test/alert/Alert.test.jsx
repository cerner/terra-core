import React from 'react';
import Button from 'terra-button';
import Alert from '../../../Alert';

class AlertActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionButtonClickCount: 0,
      showAlert: false,
    };
    this.actionFunc = this.actionFunc.bind(this);
    this.popAlert = this.popAlert.bind(this);
  }

  actionFunc() {
    this.setState(prevState => ({ actionButtonClickCount: prevState.actionButtonClickCount + 1 }));
  }

  popAlert() {
    this.setState(prevState => ({ showAlert: !prevState.showAlert }));
  }

  render() {
    this.alert = (
      <Alert id="actionAlert" type="warning" action={<Button text="Action" onClick={this.actionFunc} />}>
    This is a warning. It is configured with a custom Action button. Action button has been
    clicked
        {' '}
        <span id="actionButtonClickCount">{this.state.actionButtonClickCount}</span>
        {' '}
    times.
      </Alert>
    );
    return (
      <div>
        {/* This Test has been added to test the functionality on JAWS and Voice Over */}
        <Button text="Action" onClick={this.popAlert} />
        {this.state.showAlert && this.alert }
      </div>
    );
  }
}

export default AlertActionButton;
