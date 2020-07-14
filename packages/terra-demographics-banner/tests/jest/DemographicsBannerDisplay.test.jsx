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
    age="24"
    dateOfBirth="March 30, 2017"
    gender="F"
    personName="Terra Demographics Banner"
  />);

  expect(banner).toMatchSnapshot();
});

it('renders the banner that contains additional information', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay
    applicationContent={<span className="risk-score">5%</span>}
    age="25 Years"
    dateOfBirth="May 9, 1993"
    gender="Male"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    personName="Johnathon Doe"
    preferredFirstName="John"
  />);

  expect(banner).toMatchSnapshot();
});

it('renders the banner appropriately for a deceased person', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay
    age="24"
    gender="F"
    dateOfBirth="June 15, 2014"
    deceasedDate="March 30, 2017"
    personName="Old Terra Demographics Banner"
  />);

  expect(banner).toMatchSnapshot();
});

it('renders the banner appropriately for a person with gestational and post menstrual dates', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay
    applicationContent={<span className="risk-score">5%</span>}
    age="25 Years"
    dateOfBirth="May 9, 1993"
    gender="Male"
    gestationalAge="April 5, 2016"
    gestationalAgeLabel="GA"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    personName="Johnathon Doe"
    postMenstrualAge="April 7, 2016"
    postMenstrualAgeLabel="PMA"
    preferredFirstName="John"
  />);

  expect(banner).toMatchSnapshot();
});

it('renders gestational date with a default label when the label is not provided', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay gestationalAge="April 5, 2016" />);
  expect(banner).toMatchSnapshot();
});

it('renders post menstrural date with a default label when the label is not provided', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay postMenstrualAge="April 5, 2016" />);
  expect(banner).toMatchSnapshot();
});

it('renders the banner properly for a deceased person with additional application content', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay
    applicationContent={<span className="risk-score">5%</span>}
    age="25 Years"
    dateOfBirth="May 9, 1993"
    deceasedDate="March 5, 2016"
    gender="Male"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    personName="Johnathon Doe"
    preferredFirstName="John"
  />);

  expect(banner).toMatchSnapshot();
});

it('renders the banner with avatar', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay
    applicationContent={<span className="risk-score">5%</span>}
    age="25 Years"
    avatar={{
      alt: 'Johnathon Doe',
      color: 'neutral',
      hashValue: 'alternative hash',
      image: 'avatar',
      initials: 'JD',
      isAriaHidden: true,
    }}
    dateOfBirth="May 9, 1993"
    gender="Male"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    personName="Johnathon Doe"
    preferredFirstName="John"
  />);

  expect(banner).toMatchSnapshot();
});

it('renders the banner with confidential icon', () => {
  const banner = shallowWithIntl(<DemographicsBannerDisplay
    applicationContent={<span className="risk-score">5%</span>}
    age="25 Years"
    dateOfBirth="May 9, 1993"
    gender="Male"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    isConfidential
    personName="Johnathon Doe"
    preferredFirstName="John"
  />);

  expect(banner).toMatchSnapshot();
});
