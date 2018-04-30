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
});
