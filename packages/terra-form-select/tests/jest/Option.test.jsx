import React from 'react';
import Option from '../../src/shared/_Option';

describe('Option', () => {
  it('should render a default Option', () => {
    const wrapper = shallow(<Option value="value" display="display" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled Option', () => {
    const wrapper = shallow(<Option disabled value="value" display="display" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should return true for isOption', () => {
    const option = <Option value="value" display="display" />;
    expect(option.type.isOption).toBeTruthy();
  });
});
