import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl, shallowWithIntl } from 'terra-enzyme-intl';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import SmallDemographicsBannerDisplay from '../../src/_SmallDemographicsBannerDisplay';

it('renders small banner that contains all valid information', () => {
  const banner = shallowWithIntl(<SmallDemographicsBannerDisplay
    applicationContent={<span className="risk-score">5%</span>}
    age="25 Years"
    dateOfBirth="May 9, 1993"
    gender="Male"
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
    photo=""
    personName="Johnathon Doe"
    preferredFirstName="John"
    dateOfBirthLabel="DOB"
    deceasedDateLabel="Deceased"
    gestationalAgeLabel="GA"
    postMenstrualAgeLabel="PMA"
  />);

  expect(banner).toMatchSnapshot();
});
it('correctly applies the theme context className', () => {
  const banner = mountWithIntl(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <SmallDemographicsBannerDisplay />
    </ThemeContextProvider>,
  );
  expect(banner).toMatchSnapshot();
});
