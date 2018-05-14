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
    const alertText = 'This is a warning. It is configured with a custom Action button.';
    const alert2Text = 'This is an information alert';
    return (
      <div style={{ width: '500px', border: '1px solid black', padding: '5px' }}>
        <h3>Basic Alert of type warning with action button in a small container (500px wide) that will cause the action button section of the alert to render below the message instead of beside it.</h3>
        <Alert type={Alert.Opts.Types.WARNING} action={<Button text="Action" variant="emphasis" onClick={this.actionFunc} />} >
          {alertText}
        </Alert>
        <br />
        <p>Action button has been clicked {this.state.actionButtonClickCount} times.</p>
        <br />
        <h3>Basic Alert of type info in a small container (500px wide) which should be rendered the same as in wide container</h3>
        <Alert type={Alert.Opts.Types.INFO} >{alert2Text}</Alert>
      </div>
    );
  }
}

export default SmallContainerExample;
