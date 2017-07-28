import React from 'react';
import Base from 'terra-base';
import Button from 'terra-button';
import Alert from '../../lib/Alert';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

class AlertActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionButtonClickCount: 0,
    };
    this.actionFunc = this.actionFunc.bind(this);
  }

  actionFunc() {
    const newState = this.state;
    newState.actionButtonClickCount += 1;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <Base locale={locale}>
          <h2>Alert where alertAction prop provided containing an action button</h2>
          <br />
          <Alert id="actionAlert" type={Alert.Opts.Types.WARNING} action={<Button text="Action" size="medium" variant="primary" onClick={this.actionFunc} />} >
            This is a warning. It is configured with a custom Action button.
          </Alert>
        </Base>
        <br />
        <p>Action button has been clicked {this.state.actionButtonClickCount} times.</p>
      </div>
    );
  }
}

export default AlertActionButton;
