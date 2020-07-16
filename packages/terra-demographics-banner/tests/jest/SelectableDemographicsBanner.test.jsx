import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import SelectableDemographicsBanner from '../../src/SelectableDemographicsBanner';

it('renders a blank banner wrapper', () => {
  const banner = shallowWithIntl(<SelectableDemographicsBanner onClick={jest.fn()} />);
  expect(banner.dive()).toMatchSnapshot();
});

it('renders the banner wrapper with all props', () => {
  const onClickMock = jest.fn();

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
      genderAria="Male"
      gestationalAge="April 5, 2016"
      hashValue="alternative hash"
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
      isConfidential
      personName="Johnathon Doe"
      postMenstrualAge="April 7, 2016"
      preferredFirstName="John"
      onClick={onClickMock}
      onMouseDown={jest.fn()}
    />
  ));

  banner.dive().find('#selectableDemographics').childAt(0).simulate('click');
  expect(onClickMock).toHaveBeenCalled();
  expect(banner.dive()).toMatchSnapshot();
});
