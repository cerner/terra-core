import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ToggleButton from 'terra-toggle-button/lib/ToggleButton';
import classNames from 'classnames/bind';
import styles from './OpenCloseEventToggleButton.module.scss';

const cx = classNames.bind(styles);

class OpenCloseEventToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesOpened: 0,
      timesClosed: 0,
    };

    this.handleOnOpen = this.handleOnOpen.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  handleOnOpen() {
    this.setState(prevState => ({ timesOpened: prevState.timesOpened + 1 }));
  }

  handleOnClose() {
    this.setState(prevState => ({ timesClosed: prevState.timesClosed + 1 }));
  }

  render() {
    return (
      <div>
        <div id="on-open-event">
          <p>
Times Opened:
            <span className={cx('times-wrapper')}>{this.state.timesOpened}</span>
          </p>
          <p>
Times Closed:
            <span className={cx('times-wrapper')}>{this.state.timesClosed}</span>
          </p>
        </div>
        <ToggleButton closedButtonText="ToggleButton" onOpen={this.handleOnOpen} onClose={this.handleOnClose}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </ToggleButton>
      </div>
    );
  }
}

export default OpenCloseEventToggleButton;
