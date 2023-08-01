import React from 'react';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import uniqueid from 'lodash.uniqueid';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  KEY_SPACE, VALUE_UP, VALUE_DOWN, VALUE_RIGHT, VALUE_LEFT,
} from 'keycode-js';
import styles from './examplesetup.scss';

const cx = classNames.bind(styles);

const feildSetId = `terra-radio-group-${uniqueid()}`;
const handleHealthSolutionsClick = () => {
// eslint-disable-next-line no-alert
  alert('Health solutions button has been clicked');
};

const handleHomeClick = () => {
// eslint-disable-next-line no-alert
  alert('Home button has been clicked');
};

const handleMenuClick = () => {
// eslint-disable-next-line no-alert
  alert('Menu button has been clicked');
};

const handleSettingsClick = () => {
// eslint-disable-next-line no-alert
  alert('Settings button has been clicked');
};

const handleChatClick = () => {
// eslint-disable-next-line no-alert
  alert('Chat button has been clicked');
};

const handleTwitterClick = () => {
// eslint-disable-next-line no-alert
  alert('Twitter button has been clicked');
};

const handleBacktotopClick = () => {
// eslint-disable-next-line no-alert
  alert('Back to top button has been clicked');
};

const handleKeyDown = (event) => {
  const radioGroup = document.getElementById(feildSetId);
  const radioItems = radioGroup.querySelectorAll('[type=radio]');
  const itemIndex = Array.from(radioItems).indexOf(event.currentTarget);
  if (event.key === VALUE_DOWN || event.key === VALUE_RIGHT) {
    if (itemIndex === radioItems.length - 1) {
      radioItems[0].focus();
      radioItems[0].checked = true;
    } else {
      radioItems[itemIndex + 1].focus();
      radioItems[itemIndex + 1].checked = true;
    }
  } else if (event.key === VALUE_UP || event.key === VALUE_LEFT) {
    if (itemIndex === 0) {
      radioItems[radioItems.length - 1].focus();
      radioItems[radioItems.length - 1].checked = true;
    } else {
      radioItems[itemIndex - 1].focus();
      radioItems[itemIndex - 1].checked = true;
    }
  }
};

// Prevent scrolling when press space bar key on anchor tag
const handlePreventScroll = (event) => {
  if (event.keyCode === KEY_SPACE) {
    event.preventDefault();
  }
};

const ipsum = 'This example provides content containers with a fit (start and/or end region) and fill (middle region). Arrange Props have one required prop which is fill to the content to display in the body of the fill.';
const simpleText = <span>{ipsum}</span>;
const textWithBlueBorder = <span className={cx('outlined-placeholder')}>{ipsum}</span>;
const clinicalData = (
  <span>
    Clinical data is a staple resource for most health and medical research. Clinical data is either collected during the course of ongoing patient care or as part of a formal clinical trial program. For more information visit&nbsp;
    <a href="#clinical-information" onKeyDown={handlePreventScroll}>Clinical information</a>
  </span>
);

const healthSolutionsData = (
  <span>
    Trusted clinical technology and evidence-based solutions that drive effective decision-making and outcomes across healthcare. Specialized in clinical effectiveness, research and safety.
    <button type="button" className={cx('space-around')} onClick={handleHealthSolutionsClick}>View all health solutions</button>
  </span>
);

const consentFormData = (
  <>
    <span>A telemedicine consent form is used to confirm that a patient agrees to telemedicine services, which are medical services done remotely over the phone or computer.</span>
    <span className={cx('space-around', 'radio-buttons')} id={feildSetId}>
      <label htmlFor="yes">
        <input type="radio" id="yes" name="inline-example" value="yes" onKeyDown={handleKeyDown} />
        <span className={cx('label')}>Yes</span>
      </label>
      <label htmlFor="no">
        <input type="radio" id="no" name="inline-example" value="no" onKeyDown={handleKeyDown} />
        <span className={cx('label')}>No</span>
      </label>
    </span>
  </>
);

const textClinicalData = (
  <span className={cx('outlined-placeholder')}>{clinicalData}</span>
);

const textHealthSolutionsData = (
  <span className={cx('outlined-placeholder', 'info-text')}>{healthSolutionsData}</span>
);

const textConsentFormData = (
  <span className={cx('outlined-placeholder')}>{consentFormData}</span>
);

const alignExampleDiv = (
  <span className={cx('placeholder')} />
);

const alignExampleDivBlue = (
  <span className={cx('highlighted-placeholder')} />
);

const homeButton = (
  <Button
    className={cx(['arrange-button'])}
    isIconOnly
    icon={<span className={cx(['header-icon', 'home'])} />}
    onClick={handleHomeClick}
    text="Home button"
  />
);

const menuButton = (
  <Button
    className={cx(['arrange-button'])}
    isIconOnly
    icon={<span className={cx(['header-icon', 'menu'])} />}
    onClick={handleMenuClick}
    text="Menu button"
  />
);

const chatButton = (
  <Button
    className={cx(['arrange-button'])}
    isIconOnly
    icon={<span className={cx(['header-icon', 'chat'])} />}
    onClick={handleChatClick}
    text="Chat with us button"
  />
);

const settingsButton = (
  <Button
    className={cx(['arrange-button'])}
    isIconOnly
    icon={<span className={cx(['header-icon', 'settings'])} />}
    onClick={handleSettingsClick}
    text="Settings button"
  />
);

const twitterButton = (
  <Button
    className={cx(['arrange-button'])}
    isIconOnly
    icon={<span className={cx(['header-icon', 'twitter'])} />}
    onClick={handleTwitterClick}
    text="Twitter button"
  />
);

const backtotopButton = (
  <Button
    className={cx(['arrange-button'])}
    isIconOnly
    icon={<span className={cx(['header-icon', 'backtotop'])} />}
    onClick={handleBacktotopClick}
    text="Back to top button"
  />
);

export {
  alignExampleDiv,
  alignExampleDivBlue,
  simpleText,
  textWithBlueBorder,
  textClinicalData,
  textHealthSolutionsData,
  textConsentFormData,
  homeButton,
  menuButton,
  chatButton,
  settingsButton,
  twitterButton,
  backtotopButton,
};
