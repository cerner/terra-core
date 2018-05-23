import React from 'react';
import AddOption from '../../src/_AddOption';
import intlContexts from './intl-context-setup';

describe('AddOption', () => {
  it('should render a default AddOption', () => {
    const wrapper = shallow(<AddOption value="value" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });
});
