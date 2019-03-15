import React from 'react';
import { shallowWithIntl } from 'terra-enzyme-intl';
import MaxSelection from '../../src/_MaxSelection';

describe('MaxSelection', () => {
  it('should render a default MaxSelection', () => {
    const wrapper = shallowWithIntl(<MaxSelection value="3" />);
    expect(wrapper).toMatchSnapshot();
  });
});
