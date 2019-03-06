import React from 'react';
import MaxSelection from '../../src/_MaxSelection';
import intlContexts from './intl-context-setup';

describe('MaxSelection', () => {
  it('should render a default MaxSelection', () => {
    const wrapper = shallow(<MaxSelection value="3" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });
});
