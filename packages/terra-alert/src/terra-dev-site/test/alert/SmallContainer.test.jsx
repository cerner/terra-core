import React from 'react';
import Button from 'terra-button';
import classNames from 'classnames/bind';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Alert from 'terra-alert/lib/Alert';
import styles from './AlertTestCommon.scss';

const cx = classNames.bind(styles);

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
    const alertStartTagStr = '<Alert type="warning" action={<Button text="Action" size="medium" variant="emphasis" onClick={this.actionFunc} />} >';
    const alertEndTagStr = '</Alert>';
    const alertText = 'This is a warning. It is configured with a custom Action button.';
    const alert2StartTagStr = '<Alert type="info" >';
    const alert2EndTagStr = '</Alert>';
    const alert2Text = 'This is an information alert';
    return (
      <div className={cx('content-wrapper')}>
        <div dir="ltr">
          <h3>
Basic Alert of type warning with action button in a small container (500px wide) that will cause the action button section of the alert
              to render below the message instead of beside it.
          </h3>
          <br />
          <code>
            {alertStartTagStr}
            <br />
            &nbsp;&nbsp;
            {alertText}
.
            <br />
            {alertEndTagStr}
          </code>
        </div>
        <br />
        <Alert type="warning" action={<Button text="Action" variant="emphasis" onClick={this.actionFunc} />}>
          {alertText}
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
        <br />
        <div dir="ltr">
          <h3>Basic Alert of type info in a small container (500px wide) which should be rendered the same as in wide container</h3>
          <br />
          <code>
            {alert2StartTagStr}
            {alert2Text}
            {alert2EndTagStr}
          </code>
        </div>
        <br />
        <Alert type="info">{alert2Text}</Alert>
      </div>
    );
  }
}

export default SmallContainerExample;
