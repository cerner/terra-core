import React from 'react';
import Image from 'terra-image';
import DemographicsBanner from '../../src/DemographicsBanner';

it('renders a blank banner wrapper', () => {
  const banner = enzymeIntl.shallowWithIntl(<DemographicsBanner />);
  expect(banner.dive()).toMatchSnapshot();
});

it('renders the banner wrapper with all props', () => {
  const identifiersLongForm = { MRN: 'Medical Record Number' };
  const wrapper = enzymeIntl.shallowWithIntl((
    <DemographicsBanner
      applicationContent={<span className="risk-score">5%</span>}
      age="25 Years"
      applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
      dateOfBirth="May 9, 1993"
      gender="Male"
      gestationalAge="April 5, 2016"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      identifiersLongForm={identifiersLongForm}
      photo={<Image alt="My Cat" src="" />}
      personName="Johnathon Doe"
      postMenstrualAge="April 7, 2016"
      preferredFirstName="John"
    />
  )).dive();

  expect(wrapper.prop('personNameHeadingLevel')).toEqual(2);
  expect(wrapper.prop('identifiersLongForm')).toEqual(identifiersLongForm);
  expect(wrapper).toMatchSnapshot();
});
