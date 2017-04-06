import React from 'react';
import renderer from 'react-test-renderer';
import i18nLoader from 'terra-i18n/lib/i18nLoader';

import DemographicsBanner from '../../src/DemographicsBanner';

jest.mock('terra-i18n/lib/i18nLoader');

i18nLoader.mockImplementation((locale, setState, component) => {
  setState.call(component, { ...component.state, load: true });
});

it('renders a blank banner properly', () => {
  const banner = renderer.create(<DemographicsBanner />).toJSON();
  expect(banner).toMatchSnapshot();
});

it('renders a banner that has basic information', () => {
  const banner = renderer.create(
    <DemographicsBanner
      age="24"
      dateOfBirth="March 30, 2017"
      gender="F"
      personName="Terra Demographics Banner"
    />,
  ).toJSON();

  expect(banner).toMatchSnapshot();
});

it('renders the banner that contains additional information', () => {
  const banner = renderer.create(
    <DemographicsBanner
      additionalDetails={<span className="risk-score">5%</span>}
      age="25 Years"
      applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
      dateOfBirth="May 9, 1993"
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      photo={<img alt="My Cat" src="http://lorempixel.com/100/100/animals/7/" />}
      personName="Johnathon Doe"
      preferredFirstName="John"
    />,
  ).toJSON();

  expect(banner).toMatchSnapshot();
});

it('renders the banner appropriately for a deceased person', () => {
  const banner = renderer.create(
    <DemographicsBanner
      age="24"
      gender="F"
      dateOfBirth="June 15, 2014"
      deceasedDate="March 30, 2017"
      personName="Old Terra Demographics Banner"
    />,
  ).toJSON();

  expect(banner).toMatchSnapshot();
});

it('renders the banner appropriately for a person with gestational and post menstrual dates', () => {
  const banner = renderer.create(
    <DemographicsBanner
      additionalDetails={<span className="risk-score">5%</span>}
      age="25 Years"
      applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
      dateOfBirth="May 9, 1993"
      gender="Male"
      gestationalAge="April 5, 2016"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      photo={<img alt="My Cat" src="http://lorempixel.com/100/100/animals/7/" />}
      personName="Johnathon Doe"
      postMenstrualAge="April 7, 2016"
      preferredFirstName="John"
    />,
  ).toJSON();

  expect(banner).toMatchSnapshot();
});

it('renders the banner properly for a deceased person with additional application content', () => {
  const banner = renderer.create(
    <DemographicsBanner
      additionalDetails={<span className="risk-score">5%</span>}
      age="25 Years"
      applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
      dateOfBirth="May 9, 1993"
      deceasedDate="March 5, 2016"
      gender="Male"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      photo={<img alt="My Cat" src="http://lorempixel.com/100/100/animals/7/" />}
      preferredFirstName="John"
    />,
  ).toJSON();

  expect(banner).toMatchSnapshot();
});
