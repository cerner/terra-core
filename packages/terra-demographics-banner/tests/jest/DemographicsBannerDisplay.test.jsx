import React from 'react';
import Image from 'terra-image';
import DemographicsBannerDisplay from '../../src/DemographicsBannerDisplay';

it('renders a blank banner properly', () => {
  const banner = shallow(<DemographicsBannerDisplay />);
  expect(banner).toMatchSnapshot();
});

it('renders a banner that has basic information', () => {
  const banner = shallow(<DemographicsBannerDisplay
    age="24"
    dateOfBirth="March 30, 2017"
    gender="F"
    personName="Terra Demographics Banner"
  />);

  expect(banner).toMatchSnapshot();
});

it('renders the banner that contains additional information', () => {
  const banner = shallow(<DemographicsBannerDisplay
    applicationContent={<span className="risk-score">5%</span>}
    age="25 Years"
    applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
    dateOfBirth="May 9, 1993"
    gender="Male"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    photo={<Image alt="My Cat" src="" />}
    personName="Johnathon Doe"
    preferredFirstName="John"
  />);

  expect(banner).toMatchSnapshot();
});

it('renders the banner appropriately for a deceased person', () => {
  const banner = shallow(<DemographicsBannerDisplay
    age="24"
    gender="F"
    dateOfBirth="June 15, 2014"
    deceasedDate="March 30, 2017"
    personName="Old Terra Demographics Banner"
  />);

  expect(banner).toMatchSnapshot();
});

it('renders the banner appropriately for a person with gestational and post menstrual dates', () => {
  const banner = shallow(<DemographicsBannerDisplay
    applicationContent={<span className="risk-score">5%</span>}
    age="25 Years"
    applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
    dateOfBirth="May 9, 1993"
    gender="Male"
    gestationalAge="April 5, 2016"
    gestationalAgeLabel="GA"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    photo={<Image alt="My Cat" src="" />}
    personName="Johnathon Doe"
    postMenstrualAge="April 7, 2016"
    postMenstrualAgeLabel="PMA"
    preferredFirstName="John"
  />);

  expect(banner).toMatchSnapshot();
});

it('renders gestational date with a default label when the label is not provided', () => {
  const banner = shallow(<DemographicsBannerDisplay gestationalAge="April 5, 2016" />);
  expect(banner).toMatchSnapshot();
});

it('renders post menstrural date with a default label when the label is not provided', () => {
  const banner = shallow(<DemographicsBannerDisplay postMenstrualAge="April 5, 2016" />);
  expect(banner).toMatchSnapshot();
});

it('renders the banner properly for a deceased person with additional application content', () => {
  const banner = shallow(<DemographicsBannerDisplay
    applicationContent={<span className="risk-score">5%</span>}
    age="25 Years"
    applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
    dateOfBirth="May 9, 1993"
    deceasedDate="March 5, 2016"
    gender="Male"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    personName="Johnathon Doe"
    photo={<Image alt="My Cat" src="" />}
    preferredFirstName="John"
  />);

  expect(banner).toMatchSnapshot();
});
