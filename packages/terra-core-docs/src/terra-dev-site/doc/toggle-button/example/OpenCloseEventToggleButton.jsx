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

  const handleContactClick = () => {
    alert('Research Team');
  };

  const handleTrialSignupClick = () => {
    alert('Sign up');
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
      <ToggleButton
        closedButtonText="Explore Research"
        onOpen={handleOnOpen}
        onClose={handleOnClose}
      >
        <div className={cx('toggle-button-content')}>
          <h2>About Our Medical Research</h2>
          <p>
            At our healthcare institution, we are committed to advancing medical knowledge through rigorous research and clinical trials. Our research department is dedicated to discovering innovative treatments and improving patient outcomes.
          </p>
          <p>
            We focus on a wide range of medical specialties, including oncology, neurology, cardiology, and infectious diseases. By conducting research, we aim to develop new therapies, diagnostic tools, and preventive strategies that can make a significant impact on healthcare globally.
          </p>
          <p>
            Our research team comprises highly skilled scientists, physicians, nurses, and support staff who collaborate to design and execute clinical studies. We follow strict ethical guidelines and adhere to regulatory requirements to ensure patient safety and maintain the integrity of our research.
          </p>
          <p>
            By participating in our research studies, patients have the opportunity to access cutting-edge treatments and contribute to the advancement of medical science. We offer comprehensive support and information to participants throughout the research process.
          </p>
          <p>
            If you are interested in learning more about our ongoing research projects or considering participation in a clinical trial, please
            <a href="#contact" onClick={handleContactClick}>contact our research department</a>
            . Your involvement can help us bring new breakthroughs to patients in need.
          </p>
          <p>
            Additionally, you can directly sign up for a clinical trial by filling out our
            <a href="#trial-signup" onClick={handleTrialSignupClick}>trial signup form</a>
            . We will review your information and get in touch with you regarding eligibility and further steps.
          </p>
        </div>
      </ToggleButton>
    </div>
  );
};

export default OpenCloseEventToggleButton;
