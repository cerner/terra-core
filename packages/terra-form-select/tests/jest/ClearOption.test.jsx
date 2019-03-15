import React from 'react';
import { shallowWithIntl } from 'terra-enzyme-intl';
import ClearOption from '../../src/_ClearOption';

describe('ClearOption', () => {
  it('should render a default ClearOption', () => {
    const wrapper = shallowWithIntl(<ClearOption value="" display="Clear" />);
    expect(wrapper).toMatchSnapshot();
  });
});
