import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import MaxSelection from '../../src/_MaxSelection';

describe('MaxSelection', () => {
  it('should render a default MaxSelection', () => {
    const wrapper = shallowWithIntl(<MaxSelection value="3" />).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
