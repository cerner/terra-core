import React from 'react';
import Base from 'terra-base';
import DemographicsBanner from '../../lib/DemographicsBanner';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () =>
  <Base locale={locale}>
    <DemographicsBanner id="post-menstrual-no-label" postMenstrualAge="April 5, 2016" />
  </Base>;
