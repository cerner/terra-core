import React from 'react';
import ProgressivePaginator from '../../src/ProgressivePaginator';

describe('ProgressivePaginator', () => {
  const defaultRender = <ProgressivePaginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} />;

  // Snapshot Tests
  it('should render a default ProgressivePaginator', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the state when a new selectedPage is passed in', () => {
    const wrapper = shallow(defaultRender);
    wrapper.setProps({ selectedPage: 5 });
    expect(wrapper.state().selectedPage).toEqual(5);
  });
});
