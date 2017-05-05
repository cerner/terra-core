import React from 'react';

import DemographicsBanner from '../../src/DemographicsBanner';

it('renders a blank banner properly', () => {
  const banner = shallow(<DemographicsBanner />);
  expect(banner).toMatchSnapshot();
});

it('renders a banner that has basic information', () => {
  const banner = shallow(
    <DemographicsBanner
      age="24"
      dateOfBirth="March 30, 2017"
      gender="F"
      personName="Terra Demographics Banner"
    />,
  );

  expect(banner).toMatchSnapshot();
});

it('renders the banner that contains additional information', () => {
  const banner = shallow(
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
  );

  expect(banner).toMatchSnapshot();
});

it('renders the banner appropriately for a deceased person', () => {
  const banner = shallow(
    <DemographicsBanner
      age="24"
      gender="F"
      dateOfBirth="June 15, 2014"
      deceasedDate="March 30, 2017"
      personName="Old Terra Demographics Banner"
    />,
  );

  expect(banner).toMatchSnapshot();
});

it('renders the banner appropriately for a person with gestational and post menstrual dates', () => {
  const banner = shallow(
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
  );

  expect(banner).toMatchSnapshot();
});

it('renders the banner properly for a deceased person with additional application content', () => {
  const banner = shallow(
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
  );

  expect(banner).toMatchSnapshot();
});
