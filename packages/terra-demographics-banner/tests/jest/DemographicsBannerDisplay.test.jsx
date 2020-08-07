import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import DemographicsBannerDisplay from '../../src/DemographicsBannerDisplay';

it('renders a blank banner properly', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay />);
  expect(banner).toMatchSnapshot();
});

it('renders a banner that has basic information', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay
    age={{ value: '24', ariaLabel: '24 Years Old.' }}
    dateOfBirth={{ value: 'March 30, 2017', ariaLabel: 'March 30, 2017' }}
    administrativeSex={{ value: 'F', ariaLabel: 'Female', isBirthSexMismatch: false }}
    personName="Terra Demographics Banner"
  />);

  expect(banner).toMatchSnapshot();
});

it('renders the banner that contains additional information', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay
    applicationContent={<span className="risk-score">5%</span>}
    age={{ value: '25 Years', ariaLabel: '25 Years Old.' }}
    dateOfBirth={{ value: 'May 9, 1993', ariaLabel: 'May 9, 1993' }}
    administrativeSex={{ value: 'Male', ariaLabel: 'Male', isBirthSexMismatch: false }}
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
    photo=""
    personName="Johnathon Doe"
    preferredFirstName="John"
  />);

  expect(banner).toMatchSnapshot();
});

it('renders the banner appropriately for a deceased person', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay
    age={{ value: '24', ariaLabel: '24 Years Old.' }}
    administrativeSex={{ value: 'F', ariaLabel: 'Female', isBirthSexMismatch: false }}
    dateOfBirth={{ value: 'June 15, 2014', ariaLabel: 'June 15, 2014' }}
    deceasedDate={{ value: 'March 30, 2017', ariaLabel: 'March 30, 2017' }}
    personName="Old Terra Demographics Banner"
  />);

  expect(banner).toMatchSnapshot();
});

it('renders the banner appropriately for a person with gestational and post menstrual dates', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay
    applicationContent={<span className="risk-score">5%</span>}
    age={{ value: '25 Years', ariaLabel: '25 Years Old.' }}
    dateOfBirth={{ value: 'May 9, 1993', ariaLabel: 'May 9, 1993' }}
    administrativeSex={{ value: 'Male', ariaLabel: 'Male', isBirthSexMismatch: false }}
    gestationalAge={{ value: 'April 5, 2016', ariaLabel: 'April 5, 2016' }}
    gestationalAgeLabel="GA"
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
    photo=""
    personName="Johnathon Doe"
    postMenstrualAge={{ value: 'April 7, 2016', ariaLabel: 'April 7, 2016' }}
    postMenstrualAgeLabel="PMA"
    preferredFirstName="John"
  />);

  expect(banner).toMatchSnapshot();
});

it('renders gestational date with a default label when the label is not provided', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay gestationalAge={{ value: 'April 5, 2016', ariaLabel: 'April 5, 2016' }} />);
  expect(banner).toMatchSnapshot();
});

it('renders post menstrural date with a default label when the label is not provided', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay postMenstrualAge={{ value: 'April 5, 2016', ariaLabel: 'April 5, 2016' }} />);
  expect(banner).toMatchSnapshot();
});

it('renders the banner properly for a deceased person with additional application content', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay
    applicationContent={<span className="risk-score">5%</span>}
    age={{ value: '25 Years', ariaLabel: '25 Years Old.' }}
    dateOfBirth={{ value: 'May 9, 1993', ariaLabel: 'May 9, 1993' }}
    deceasedDate={{ value: 'March 5, 2016', ariaLabel: 'March 5, 2016' }}
    administrativeSex={{ value: 'Male', ariaLabel: 'Male', isBirthSexMismatch: false }}
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
    personName="Johnathon Doe"
    photo=""
    preferredFirstName="John"
  />);

  expect(banner).toMatchSnapshot();
});

it('renders the banner with confidential icon', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay
    applicationContent={<span className="risk-score">5%</span>}
    age={{ value: '25 Years', ariaLabel: '25 Years Old.' }}
    dateOfBirth={{ value: 'May 9, 1993', ariaLabel: 'May 9, 1993' }}
    administrativeSex={{ value: 'Male', ariaLabel: 'Male', isBirthSexMismatch: false }}
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
    personName="Johnathon Doe"
    preferredFirstName="John"
  />);

  expect(banner).toMatchSnapshot();
});
