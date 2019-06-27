import React from 'react';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import Alert from '../../../Alert';
import styles from './AlertTestCommon.scss';

const cx = classNames.bind(styles);

class AlertResponsiveToParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionButtonClickCount: 0,
      isDismissed: false,
    };
    this.actionFunc = this.actionFunc.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  actionFunc() {
    const newState = this.state;
    newState.actionButtonClickCount += 1;
    this.setState(newState);
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
      alertElem = <Alert id="dismissibleAlert" type="success" onDismiss={this.handleDismiss}>{alertText}</Alert>;
    }
    return (
      <div className={cx('content-wrapper')}>
        <h3>
Alerts with actions in a small container (500px wide) that will cause the action section of the alert
            to render below the message instead of beside it.
        </h3>
        <br />
        <Alert id="actionAlert" type="warning" action={<Button text="Action" variant={Button.Opts.Variants.EMPHASIS} onClick={this.actionFunc} />}>
          This is a warning. It is configured with a custom Action button.
        </Alert>
        <br />
        <p>
Action button has been clicked
          {this.state.actionButtonClickCount}
          {' '}
times.
        </p>
        <br />
        <br />
        {alertElem}
        <br />
        <br />
        <Alert id="noActionsAlert" type="info">This is an info alert</Alert>
      </div>
    );
  }
}

export default AlertResponsiveToParent;
