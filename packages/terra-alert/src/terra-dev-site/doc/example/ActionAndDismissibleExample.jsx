import React from 'react';
import Button from 'terra-button';
import classNames from 'classnames/bind';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Alert from 'terra-alert/lib/Alert';
import styles from './colors.module.scss';

const cx = classNames.bind(styles);

class ActionAndDismissibleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDismissed: false,
      actionButtonClickCount: 0,
    };
    this.handleDismiss = this.handleDismiss.bind(this);
    this.actionFunc = this.actionFunc.bind(this);
  }

  handleDismiss() {
    const newState = this.state;
    newState.isDismissed = true;
    this.setState(newState);
  }

  actionFunc() {
    const newState = this.state;
    newState.actionButtonClickCount += 1;
    this.setState(newState);
  }

  render() {
    const alertText = 'This is a a custom alert with no icon or title. It is configured to be dismissible and with a custom action button. Click on the Dismiss button to dismiss the alert.';
    let alertElem = '';
    if (!this.state.isDismissed) {
      alertElem = (
        <Alert type="custom" onDismiss={this.handleDismiss} customColorClass={cx(['my-app-alert-dismiss-example'])} action={<Button text="Action" variant="emphasis" onClick={this.actionFunc} />}>
          {alertText}
        </Alert>
      );
    }
    return (
      <div>
        {alertElem}
        <br />
        <p>
          Action button has been clicked
          {' '}
          {this.state.actionButtonClickCount}
          {' '}
          times.
        </p>
      </div>
    );
  }
}

export default ActionAndDismissibleExample;
