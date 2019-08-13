import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import OptGroup from '../../src/shared/_OptGroup';

describe('OptGroup', () => {
  it('should render a default Option', () => {
    const wrapper = shallowWithIntl(<OptGroup label="label" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should return true for isOptGroup', () => {
    const option = <OptGroup label="label" />;
    expect(option.type.isOptGroup).toBeTruthy();
  });
});
