import React from 'react';
import AddOption from '../../src/shared/_AddOption';

describe('AddOption', () => {
  it('should render a default AddOption', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<AddOption value="value" />).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
