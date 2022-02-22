import React from 'react';
import IconCollectionTable from '../../src/IconCollectionTable';
import IconCollectionRow from '../../src/IconCollectionTable/IconCollectionRow';

import { bareMinimum, twoBareMinimums, bareMaximum } from './iconCollectionData'

describe('IconCollectionTable', () => {
  it('should render properly with the bare minimum required props', () => {
    const wrapper = shallow(<IconCollectionTable
      rows={bareMinimum}
    />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should pass the all correct props to its child rows', () => {
    const wrapper = shallow(<IconCollectionTable
      rows={bareMaximum}
    />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a row for each item', () => {
    const wrapper = shallow(<IconCollectionTable
      rows={twoBareMinimums}
    />);
    expect(wrapper.find('tbody').children(IconCollectionRow).length).toBe(2);
  });
});
