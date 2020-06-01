import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import SelectableDemographicsBanner from '../../src/SelectableDemographicsBanner';

it('renders a blank banner wrapper', () => {
  const tileClick = jest.fn();

  const banner = shallowWithIntl(<SelectableDemographicsBanner onClick={tileClick} />);
  expect(banner.dive()).toMatchSnapshot();
});

it('renders the banner wrapper with all props', () => {
  const tileClick = jest.fn();
  const tileMouseDown = jest.fn();

  const banner = shallowWithIntl((
    <SelectableDemographicsBanner
      id="selectableDemographics"
      age="25 Years"
      applicationContent={<span className="risk-score">5%</span>}
      avatar={{
        alt: 'Johnathon Doe',
        color: 'neutral',
        hashValue: 'alternative hash',
        image: '',
        initials: 'JD',
        isAriaHidden: true,
      }}
      dateOfBirth="May 9, 1993"
      deceasedDate="January 10, 2020"
      gender="Male"
      gestationalAge="April 5, 2016"
      hashValue="alternative hash"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      personName="Johnathon Doe"
      photo=""
      postMenstrualAge="April 7, 2016"
      preferredFirstName="John"
      onClick={tileClick}
      onMouseDown={tileMouseDown}
    />
  ));

  banner.dive().find('#selectableDemographics').childAt(0).simulate('mousedown');
  expect(tileMouseDown).toHaveBeenCalled();

  banner.dive().find('#selectableDemographics').childAt(0).simulate('click');
  expect(tileClick).toHaveBeenCalled();
  expect(banner.dive()).toMatchSnapshot();
});
