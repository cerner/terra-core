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
    dateOfBirthLabel="DOB"
    dateOfBirthFullText="Date of Birth"
    administrativeSex={{ value: 'F', ariaLabel: 'Female', isBirthSexMismatch: false }}
    administrativeSexFullText="Administrative Sex"
    personName="Terra Demographics Banner"
  />);

  expect(banner).toMatchSnapshot();
});

it('renders the banner that contains additional information', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay
    applicationContent={<span className="risk-score">5%</span>}
    age={{ value: '25 Years', ariaLabel: '25 Years Old.' }}
    dateOfBirth={{ value: 'May 9, 1993', ariaLabel: 'May 9, 1993' }}
    dateOfBirthLabel="DOB"
    dateOfBirthFullText="Date of Birth"
    administrativeSex={{ value: 'Male', ariaLabel: 'Male', isBirthSexMismatch: true }}
    administrativeSexFullText="Administrative Sex"
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
    sexMismatchFullText="The documented sex values are not identical."
  />);

  expect(banner).toMatchSnapshot();
});

it('renders the banner appropriately for a deceased person', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay
    age={{ value: '24', ariaLabel: '24 Years Old.' }}
    administrativeSex={{ value: 'F', ariaLabel: 'Female', isBirthSexMismatch: false }}
    administrativeSexFullText="Administrative Sex"
    dateOfBirth={{ value: 'June 15, 2014', ariaLabel: 'June 15, 2014' }}
    dateOfBirthLabel="DOB"
    dateOfBirthFullText="Date of Birth"
    deceasedDate={{ value: 'March 30, 2017', ariaLabel: 'March 30, 2017' }}
    deceasedDateLabel="Deceased"
    personName="Old Terra Demographics Banner"
  />);

  expect(banner).toMatchSnapshot();
});

it('renders the banner appropriately for a person with gestational and post menstrual dates', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay
    applicationContent={<span className="risk-score">5%</span>}
    age={{ value: '25 Years', ariaLabel: '25 Years Old.' }}
    dateOfBirth={{ value: 'May 9, 1993', ariaLabel: 'May 9, 1993' }}
    dateOfBirthLabel="DOB"
    dateOfBirthFullText="Date of Birth"
    administrativeSex={{ value: 'Male', ariaLabel: 'Male', isBirthSexMismatch: false }}
    administrativeSexFullText="Administrative Sex"
    gestationalAge={{ value: 'April 5, 2016', ariaLabel: 'April 5, 2016' }}
    gestationalAgeLabel="GA"
    gestationalAgeFullText="Gestational Age"
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
    postMenstrualAge={{ value: 'April 7, 2016', ariaLabel: 'April 7, 2016' }}
    postMenstrualAgeLabel="PMA"
    postMenstrualAgeFullText="Post Menstrual Age"
    preferredFirstName="John"
  />);

  expect(banner).toMatchSnapshot();
});

it('renders gestational date with a default label', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay
    gestationalAge={{ value: 'April 5, 2016', ariaLabel: 'April 5, 2016' }}
    gestationalAgeLabel="GA"
    gestationalAgeFullText="Gestational Age"
  />);
  expect(banner).toMatchSnapshot();
});

it('renders post menstrual date with a default label', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay
    postMenstrualAge={{ value: 'April 5, 2016', ariaLabel: 'April 5, 2016' }}
    postMenstrualAgeLabel="PMA"
    postMenstrualAgeFullText="Post Menstrual Age"
  />);
  expect(banner).toMatchSnapshot();
});

it('renders the banner properly for a deceased person with additional application content', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay
    applicationContent={<span className="risk-score">5%</span>}
    age={{ value: '25 Years', ariaLabel: '25 Years Old.' }}
    dateOfBirth={{ value: 'May 9, 1993', ariaLabel: 'May 9, 1993' }}
    dateOfBirthLabel="DOB"
    dateOfBirthFullText="Date of Birth"
    deceasedDate={{ value: 'March 5, 2016', ariaLabel: 'March 5, 2016' }}
    deceasedDateLabel="Deceased"
    administrativeSex={{ value: 'Male', ariaLabel: 'Male', isBirthSexMismatch: false }}
    administrativeSexFullText="Administrative Sex"
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
    dateOfBirthLabel="DOB"
    dateOfBirthFullText="Date of Birth"
    administrativeSex={{ value: 'Male', ariaLabel: 'Male', isBirthSexMismatch: false }}
    administrativeSexFullText="Administrative Sex"
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
