import React from 'react';
import Button from 'terra-button';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Alert from 'terra-alert/lib/Alert';

class ActionExample extends React.Component {
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
        <Alert type="warning" action={<Button text="Action" variant="emphasis" onClick={this.actionFunc} />}>
          This is a warning. It is configured with a custom Action button.
        </Alert>
        <p>
Action button has been clicked
          {this.state.actionButtonClickCount}
          {' '}
times.
        </p>
      </div>
    );
  }
}

export default ActionExample;
