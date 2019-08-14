import React from 'react';
import Tag from '../../src/shared/_Tag';

describe('Tag', () => {
  it('should render a default Tag', () => {
    const wrapper = shallow(<Tag value="value" onDeselect={() => {}}>Content</Tag>);
    expect(wrapper).toMatchSnapshot();
  });
});
