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
      age={{ value: '25 Years', ariaLabel: '25 Years Old.' }}
      dateOfBirth={{ value: 'May 9, 1993', ariaLabel: 'May 9, 1993' }}
      administrativeSex={{ value: 'Male', ariaLabel: 'Male', isBirthSexMismatch: false }}
      gestationalAge={{ value: 'April 5, 2016', ariaLabel: 'April 5, 2016' }}
      identifiers={[
        {
          label: 'MRN',
          value: '12343',
          ariaLabel: 'MRN 1 2 3 4 5',
        },
        {
          label: 'REA',
          value: '3JSDA',
          ariaLabel: 'R E A 3JSDA',
        },
      ]}
      isConfidential
      photo=""
      personName="Johnathon Doe"
      postMenstrualAge={{ value: 'April 7, 2016', ariaLabel: 'April 7, 2016' }}
      preferredFirstName="John"
    />
  ));

  expect(banner.dive()).toMatchSnapshot();
});
