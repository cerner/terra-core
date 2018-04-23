import React from 'react';
import Paginator from '../../src/Paginator';

describe('Paginator', () => {
  const defaultRender = <Paginator onPageChange={(e, i) => true} selectedPage={1} totalCount={2234} itemCountPerPage={20} />;
  const noPagesRender = <Paginator />;

  // Snapshot Tests
  it('should render a default paginator', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a paginator without page links', () => {
    const wrapper = shallow(noPagesRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Structure Tests
  it('should have the class paginator', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('paginator');
  });
});
