import React, { useState } from 'react';
import ToggleButton from 'terra-toggle-button';
import classNames from 'classnames/bind';
import styles from './OpenCloseEventToggleButton.module.scss';

const cx = classNames.bind(styles);

const OpenCloseEventToggleButton = () => {
  const [timesOpened, setTimesOpened] = useState(0);
  const [timesClosed, setTimesClosed] = useState(0);

  const handleOnOpen = () => {
    setTimesOpened(timesOpened + 1);
  };

  const handleOnClose = () => {
    setTimesClosed(timesClosed + 1);
  };

  return (
    <div>
      <div id="on-open-event">
        <p>
          Times Opened:
          <span className={cx('times-wrapper')}>{timesOpened}</span>
        </p>
        <p>
          Times Closed:
          <span className={cx('times-wrapper')}>{timesClosed}</span>
        </p>
      </div>
      <ToggleButton closedButtonText="ToggleButton" onOpen={handleOnOpen} onClose={handleOnClose}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </ToggleButton>
    </div>
  );
};

export default OpenCloseEventToggleButton;
