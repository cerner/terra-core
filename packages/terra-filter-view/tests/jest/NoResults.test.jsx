import React from 'react';
import NoResults from '../../src/_NoResults';

describe('NoResults', () => {
  it('should render a default NoResults', () => {
    const wrapper = shallow(<NoResults value="value" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render NoResults with custom content', () => {
    const wrapper = shallow(<NoResults value="value" noResultContent={<div>Custom</div>} />);
    expect(wrapper).toMatchSnapshot();
  });
});
