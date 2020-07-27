import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import DemographicsBanner from '../../src/DemographicsBanner';

it('renders a blank banner wrapper', () => {
  const banner = shallowWithIntl(<DemographicsBanner />);
  expect(banner.dive()).toMatchSnapshot();
});

it('renders the banner wrapper with all props', () => {
  const banner = shallowWithIntl((
    <DemographicsBanner
      applicationContent={<span className="risk-score">5%</span>}
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gender="Male"
      genderAria="Male"
      gestationalAge="April 5, 2016"
      identifiers={[
        {
          label: 'MRN',
          value: '12343',
          identifierAria: 'MRN 1 2 3 4 5',
        },
        {
          label: 'REA',
          value: '3JSDA',
          identifierAria: 'R E A 3JSDA',
        },
      ]}
      isConfidential
      photo=""
      personName="Johnathon Doe"
      postMenstrualAge="April 7, 2016"
      preferredFirstName="John"
    />
  ));

  expect(banner.dive()).toMatchSnapshot();
});
