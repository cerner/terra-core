import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';

import Image from '../../../terra-image/lib/Image';
import DemographicsBanner from '../../src/DemographicsBanner';

it('renders a blank banner wrapper', () => {
  const banner = shallowWithIntl(<DemographicsBanner />);
  expect(banner).toMatchSnapshot();
});

it('renders the banner wrapper with all props', () => {
  const banner = shallowWithIntl((
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
  ));

  expect(banner).toMatchSnapshot();
});

it('throws error on missing locale prop in Base', () => {
  global.console = { error: jest.fn() };

  expect(() => {
    render(<DemographicsBanner />);
  }).toThrowError();
  // eslint-disable-next-line no-console
  expect(console.error).toBeCalledWith(expect.stringContaining('Component is internationalized, and must be wrapped in terra-base'));
});
