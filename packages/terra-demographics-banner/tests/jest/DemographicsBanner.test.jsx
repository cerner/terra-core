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
      avatar={{
        alt: 'Johnathon Doe',
        color: 'neutral',
        hashValue: 'alternative hash',
        image: '',
        initials: 'JD',
        isAriaHidden: true,
      }}
      dateOfBirth="May 9, 1993"
      gender="Male"
      gestationalAge="April 5, 2016"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      photo=""
      personName="Johnathon Doe"
      postMenstrualAge="April 7, 2016"
      preferredFirstName="John"
    />
  ));

  expect(banner.dive()).toMatchSnapshot();
});
