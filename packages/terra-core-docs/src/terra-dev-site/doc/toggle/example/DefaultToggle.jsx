import React, { useState } from 'react';
import Toggle from 'terra-toggle';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import classNames from 'classnames/bind';
import styles from './ToggleExample.module.scss';

const ToggleDefault = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };
  const cx = classNames.bind(styles);

  return (
    <div>
      <IconInformation className={cx('is-focused')} a11yLabel="information Icon" tabIndex="0" role="button" onClick={handleOnClick} aria-expanded={isOpen} aria-controls="toggle" />
      {/**
      * The aria-expanded state is used on the triggering component to indicate the contents are collapsible, and whether a region is currently expanded or collapsed
      */}
      <Toggle id="default-toggle" isOpen={isOpen}>
        <p>
          Lorem ipsum dolor sit amet,
          <a href="#test">consectetur</a>
          {' '}
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Toggle>
    </div>
  );
};

export default ToggleDefault;
