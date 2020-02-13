import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import SelectableDemographicsBanner from '../../src/selectable-demographics-banner/SelectableDemographicsBanner';

it('renders a blank banner wrapper', () => {
  const tileClick = jest.fn();
  const buttonClick = jest.fn();

  const banner = shallowWithIntl(<SelectableDemographicsBanner selectableTileClick={tileClick} infoButtonClick={buttonClick} />);
  expect(banner.dive()).toMatchSnapshot();
});

it('renders the banner wrapper with all props', () => {
  const tileClick = jest.fn();
  const buttonClick = jest.fn();

  const banner = shallowWithIntl((
    <SelectableDemographicsBanner
      applicationContent={<span className="risk-score">5%</span>}
      age="25 Years"
      applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
      dateOfBirth="May 9, 1993"
      gender="Male"
      gestationalAge="April 5, 2016"
      identifiers={{ MRN: 12343, REA: '3JSDA' }}
      photo=""
      personName="Johnathon Doe"
      postMenstrualAge="April 7, 2016"
      preferredFirstName="John"
      selectableTileClick={tileClick}
      infoButtonClick={buttonClick}
      infoButtonId="infoButton"
      selectableTileId="selectableDemographics"
    />
  ));

  banner.dive().find('#selectableDemographics').simulate('click');
  expect(tileClick).toHaveBeenCalled();

  banner.dive().find('#infoButton').simulate('click');
  expect(buttonClick).toHaveBeenCalled();
  expect(banner.dive()).toMatchSnapshot();
});
