import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import Image from 'terra-image';
import DemographicsBanner from '../../src/DemographicsBanner';

it('renders a blank banner wrapper', () => {
  const banner = shallowWithIntl(<DemographicsBanner />);
  expect(banner.dive()).toMatchSnapshot();
});

it('renders the banner wrapper with all props', () => {
  const wrapper = shallowWithIntl((
    <DemographicsBanner
      applicationContent={<span className="risk-score">5%</span>}
      age="25 Years"
      applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
      dateOfBirth="May 9, 1993"
      gender="Male"
      gestationalAge="April 5, 2016"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      photo={<Image alt="My Cat" src="" />}
      personName="Johnathon Doe"
      postMenstrualAge="April 7, 2016"
      preferredFirstName="John"
    />
  )).dive();

  const identifiers = { 'Terra.demographicsBanner.MRN': 12343, REA: '3JSDA' };
  const defaultIdentifierTitles = {
    'Terra.demographicsBanner.MRN': 'Terra.demographicsBanner.MRN_fullText',
  };

  expect(wrapper.prop('personNameLevel')).toEqual(2);
  expect(wrapper.prop('identifiers')).toEqual(identifiers);
  expect(wrapper.prop('identifierTitles')).toEqual(defaultIdentifierTitles);
  expect(wrapper).toMatchSnapshot();
});
