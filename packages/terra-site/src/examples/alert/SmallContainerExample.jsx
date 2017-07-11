import React from 'react';
import Alert from 'terra-alert';
import Button from 'terra-button';

class SmallContainerExample extends React.Component {
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
    const alertStartTagStr = '<Alert type={Alert.Opts.Types.WARNING} alertAction={<Button text="Action" size="medium" variant="primary" onClick={this.actionFunc} />} >';
    const alertEndTagStr = '</Alert>';
    const alertText = 'This is a warning. It is configured with a custom Action button.';
    return (
      <div style={{ width: '500px', border: '1px solid black', padding: '5px' }}>
        <div dir="ltr">
          <h3>Basic Alert of type warning with action button in a small container (500px wide) that will cause the action button section of the alert
              to render below the message instead of beside it.</h3>
          <br />
          <code>
            {alertStartTagStr}
            <br />
            &nbsp;&nbsp;{alertText}.
            <br />
            {alertEndTagStr}
          </code>
        </div>
        <br />
        <Alert type={Alert.Opts.Types.WARNING} alertAction={<Button text="Action" size="medium" variant="primary" onClick={this.actionFunc} />} >
          {alertText}
        </Alert>
        <br />
        <p>Action button has been clicked {this.state.actionButtonClickCount} times.</p>
      </div>
    );
  }
}

export default SmallContainerExample;
