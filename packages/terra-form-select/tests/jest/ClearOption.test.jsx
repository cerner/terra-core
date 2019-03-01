import React from 'react';
import ClearOption from '../../src/_ClearOption';
import intlContexts from './intl-context-setup';

describe('ClearOption', () => {
  it('should render a default ClearOption', () => {
    const wrapper = shallow(<ClearOption value="" display='Clear' />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });
});
