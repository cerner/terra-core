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
      <ToggleButton closedButtonText="Information about Model Experience" onOpen={handleOnOpen} onClose={handleOnClose}>
        <p>New implementations of Cerner solutions use Model Experience, our collection of industry and Cerner best practices, to provide strategic recommendations for implementing and utilizing Cerner platforms. Cerner consulting services specialize in organizational change management and will help lead your organization through the implementation process. We’ll work with your employees to establish engagement and encourage best practices so your staff can confidently and competently adopt your new EHR system.</p>
      </ToggleButton>
    </div>
  );
};

export default OpenCloseEventToggleButton;
