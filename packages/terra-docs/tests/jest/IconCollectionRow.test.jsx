import React from 'react';
import IconCollectionRow from '../../src/IconCollectionTable/IconCollectionRow';

import { bareMinimum, bareMaximum } from './iconCollectionData';

describe('IconCollectionTable', () => {
  it('should render a default component with minimum props', () => {
    const wrapper = shallow(<IconCollectionRow
      {...bareMinimum[0]}
    />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a default component with maximum props', () => {
    const wrapper = shallow(<IconCollectionRow
      {...bareMaximum[0]}
    />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a check icon for each function of the icon', () => {
    const wrapper = shallow(<IconCollectionRow
      {...bareMinimum[0]}
      isAction
      isStatus
      isToggle
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
