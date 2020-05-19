import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import SmallDemographicsBannerDisplay from '../../src/_SmallDemographicsBannerDisplay';

it('renders small banner that contains all valid information', () => {
  const banner = shallow(<SmallDemographicsBannerDisplay
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
  const banner = mount(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <SmallDemographicsBannerDisplay />
    </ThemeContextProvider>,
  );
  expect(banner).toMatchSnapshot();
});
