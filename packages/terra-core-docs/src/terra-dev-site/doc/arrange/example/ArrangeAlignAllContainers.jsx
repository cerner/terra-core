import React from 'react';
import Arrange from 'terra-arrange';
import {
  textClinicalData, textHealthSolutionsData, textConsentFormData, homeButton, menuButton, chatButton, settingsButton, twitterButton, backtotopButton,
} from '../common/examplesetup';

const ArrangeAlignAllContainers = () => (
  <div>
    <h3>Align - Default</h3>
    <Arrange
      fitStart={homeButton}
      fill={textClinicalData}
      fitEnd={menuButton}
    />
    <br />
    <hr />
    <h3>Align - Center</h3>
    <Arrange
      align="center"
      fitStart={settingsButton}
      fill={textHealthSolutionsData}
      fitEnd={chatButton}
    />
    <br />
    <hr />
    <h3>Align - Bottom</h3>
    <Arrange
      align="bottom"
      fitStart={twitterButton}
      fill={textConsentFormData}
      fitEnd={backtotopButton}
    />
  </div>
);

export default ArrangeAlignAllContainers;
