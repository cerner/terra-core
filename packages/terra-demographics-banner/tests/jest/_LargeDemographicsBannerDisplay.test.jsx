import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl, shallowWithIntl } from 'terra-enzyme-intl';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import LargeDemographicsBannerDisplay from '../../src/_LargeDemographicsBannerDisplay';

it('renders large banner that contains all valid information', () => {
  const banner = shallowWithIntl(<LargeDemographicsBannerDisplay
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
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
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
      <LargeDemographicsBannerDisplay />
    </ThemeContextProvider>,
  );
  expect(banner).toMatchSnapshot();
});
