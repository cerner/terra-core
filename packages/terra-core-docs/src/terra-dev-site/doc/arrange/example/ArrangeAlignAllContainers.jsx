import React from 'react';
import classNames from 'classnames/bind';
import Arrange from 'terra-arrange';
import {
  textClinicalData, textHealthSolutionsData, textConsentFormData, homeButton, menuButton, chatButton, settingsButton, twitterButton, backtotopButton,
} from '../common/examplesetup';
import styles from './ArrangeExamples.module.scss';

const cx = classNames.bind(styles);

const ArrangeAlignAllContainers = () => (
  <div>
    <h3>Align - Default</h3>
    <Arrange
      className={cx('arrange')}
      fitStart={homeButton}
      fill={textClinicalData}
      fitEnd={menuButton}
    />
    <br />
    <hr />
    <h3>Align - Center</h3>
    <Arrange
      align="center"
      className={cx('arrange')}
      fitStart={settingsButton}
      fill={textHealthSolutionsData}
      fitEnd={chatButton}
    />
    <br />
    <hr />
    <h3>Align - Bottom</h3>
    <Arrange
      align="bottom"
      className={cx('arrange')}
      fitStart={twitterButton}
      fill={textConsentFormData}
      fitEnd={backtotopButton}
    />
  </div>
);

export default ArrangeAlignAllContainers;
