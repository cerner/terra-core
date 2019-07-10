import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import OptGroup from '../../src/_OptGroup';

describe('OptGroup', () => {
  it('should render a default Option', () => {
    const wrapper = shallowWithIntl(<OptGroup label="label" />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should return true for isOptGroup', () => {
    const option = <OptGroup label="label" />;
    expect(option.type.isOptGroup).toBeTruthy();
  });
});
