import React from 'react';
import OptGroup from '../../src/_OptGroup';

describe('OptGroup', () => {
  it('should render a default Option', () => {
    const wrapper = shallow(<OptGroup label="label" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should return true for isOptGroup', () => {
    const option = <OptGroup label="label" />;
    expect(option.type.isOptGroup).toBeTruthy();
  });
});
