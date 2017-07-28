import React from 'react';
import Base from 'terra-base';
import Alert from '../../lib/Alert';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

class AlertDismissible extends React.Component {
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
      alertElem = <Alert id="dismissibleAlert" type={Alert.Opts.Types.SUCCESS} onDismiss={this.handleDismiss} >{alertText}</Alert>;
    }
    return (
      <div>
        <Base locale={locale}>
          <h2>Alert with onDismiss prop triggering Dismiss button to be rendered. Custom onDismiss callback rerenders page without the Alert.</h2>
          <br />
          {alertElem}
        </Base>
      </div>
    );
  }
}

export default AlertDismissible;
