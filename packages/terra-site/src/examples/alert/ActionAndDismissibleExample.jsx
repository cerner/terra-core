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
  }

  handleDismiss() {
    const newState = this.state;
    newState.isDismissed = true;
    this.setState(newState);
  }

  actionFunc() {
    // eslint-disable-next-line no-alert
    alert('Action performed');
  }

  render() {
    let alertElem = '';
    if (!this.state.isDismissed) {
      alertElem = 
        <Alert type={AlertTypes.ADVISORY} onDismiss={this.handleDismiss} alertAction={<Button text="Action" size="medium" variant="primary" onClick={this.actionFunc} />} >
          This is an advisory. It is configured to be dismissible and with a custom action button.
        </Alert>;
    }
    return (
      <div>
        <h3>Alert of type advisory that is dismissible and has an action button. Click on the Dismiss button to dismiss the alert.</h3>
        <br />
        <code>
          &lt;Alert type=&#x007B;AlertTypes.ADVISORY&#x007D; onDismiss=&#x007B;this.handleDismiss&#x007D; alertAction=&#x007B;&lt;Button text=&quot;Action&quot; size=&quot;medium&quot; variant=&quot;primary&quot; onClick=&#x007B;actionFunc&#x007D; /&gt;&#x007D; &gt;This is an advisory. It is configured to be dismissible and with a custom action button.&lt;/Alert&gt;
        </code>
        <br /><br />
        {alertElem}
      </div>
    );
  }
}

export default ActionAndDismissibleExample;
