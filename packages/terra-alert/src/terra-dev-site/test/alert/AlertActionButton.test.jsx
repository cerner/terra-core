import React from 'react';
import Button from 'terra-button';
import Alert from '../../../Alert';

class AlertActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionButtonClickCount: 0,
    };
    this.actionFunc = this.actionFunc.bind(this);
  }

  actionFunc() {
    const actionButtonClickCount = this.state.actionButtonClickCount + 1;
    this.setState({ actionButtonClickCount });
  }

  render() {
    return (
      <Alert id="actionAlert" type="warning" action={<Button text="Action" onClick={this.actionFunc} />} >
        This is a warning. It is configured with a custom Action button. Action button has been
        clicked <span id="actionButtonClickCount">{this.state.actionButtonClickCount}</span> times.
      </Alert>
    );
  }
}

export default AlertActionButton;
