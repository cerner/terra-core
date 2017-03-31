import React from 'react';
import DemographicsBanner from '../../src/DemographicsBanner';

describe('DemographicsBanner', () => {
  it('renders a blank banner properly', () => {
    const banner = shallow(<DemographicsBanner />);
    expect(banner).toMatchSnapshot();
  });

  it('renders a banner that has basic information', () => {
    const banner = shallow(
      <DemographicsBanner
        age="24"
        gender="F"
        personName="Terra Demographics Banner"
        dateOfBirth="March 30, 2017"
      />,
    );

    expect(banner).toMatchSnapshot();
  });

  it('renders the banner that contains additional information', () => {
    const banner = shallow(
      <DemographicsBanner
        photo={<img alt="My Cat" src="http://lorempixel.com/100/100/animals/7/" />}
        personName="Johnathon Doe"
        preferredFirstName="John"
        gender="Male"
        age="25 Years"
        dateOfBirth="May 9, 1993"
        additionalDetails={<span className="risk-score">5%</span>}
        identifiers={{ MRN: 12343, REA: '3JSDA' }}
        applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
      />,
    );

    expect(banner).toMatchSnapshot();
  });

  it('renders the banner appropriately for a deceased person', () => {
    const banner = shallow(
      <DemographicsBanner
        age="24"
        gender="F"
        personName="Old Terra Demographics Banner"
        dateOfBirth="June 15, 2014"
        deceasedDate="March 30, 2017"
      />,
    );

    expect(banner).toMatchSnapshot();
  });

  it('renders the banner properly for a deceased person with additional application content', () => {
    const banner = shallow(
      <DemographicsBanner
        photo={<img alt="My Cat" src="http://lorempixel.com/100/100/animals/7/" />}
        personName="Johnathon Doe"
        preferredFirstName="John"
        gender="Male"
        age="25 Years"
        deceased="March 5, 2016"
        dateOfBirth="May 9, 1993"
        additionalDetails={<span className="risk-score">5%</span>}
        identifiers={{ MRN: 12343, REA: '3JSDA' }}
        applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
      />,
    );

    expect(banner).toMatchSnapshot();
  });
});
