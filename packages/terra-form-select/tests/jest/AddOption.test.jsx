import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import AddOption from '../../src/_AddOption';

describe('AddOption', () => {
  it('should render a default AddOption', () => {
    const wrapper = shallowWithIntl(<AddOption value="value" />).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
