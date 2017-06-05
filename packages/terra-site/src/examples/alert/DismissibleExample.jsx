import React from 'react';
import Alert, { AlertTypes } from 'terra-alert';

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
    let alertElem = '';
    if (!this.state.isDismissed) {
      alertElem = <Alert type={AlertTypes.CONFIRMATION} onDismiss={this.handleDismiss} >This is a confirmation. It is configured to be dismissible.</Alert>;
    }
    return (
      <div>
        <h3>Alert of type confirmation that is dismissible. Click on the Dismiss button to dismiss the alert.</h3>
        <br />
        <code>
          &lt;Alert type=&#x007B;AlertTypes.CONFIRMATION&#x007D; onDismiss=&#x007B;this.handleDismiss&#x007D;  &gt;This is a confirmation. It is configured to be dismissible.&lt;/Alert&gt;
        </code>
        <br /><br />
        {alertElem}
      </div>
    );
  }
}

export default DismissibleExample;
