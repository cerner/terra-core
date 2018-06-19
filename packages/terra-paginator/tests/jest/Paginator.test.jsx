import React from 'react';
import Paginator from '../../src/Paginator';

describe('Paginator', () => {
  const defaultRender = <Paginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} />;
  const noPagesRender = <Paginator onPageChange={e => typeof e} />;

  // Snapshot Tests
  it('should render a default paginator', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a paginator without page links', () => {
    const wrapper = shallow(noPagesRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the state when a new selectedPage is passed in', () => {
    const wrapper = shallow(defaultRender);
    wrapper.setProps({ selectedPage: 5 });
    expect(wrapper.state().selectedPage).toEqual(5);
  });

  it('should update the state when total count is changed ', () => {
    const wrapper = shallow(defaultRender);
    wrapper.setProps({ totalCount: 500, selectedPage: 15 });
    expect(wrapper.state().pageSequence).toEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
  });

  it('should update the state when the item count is changed ', () => {
    const wrapper = shallow(defaultRender);
    wrapper.setProps({ itemCountPerPage: 200, selectedPage: 5 });
    expect(wrapper.state().pageSequence).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
