import React from 'react';
import ControlledPaginator from '../../src/ControlledPaginator';

describe('Paginator', () => {
  const defaultRender = <ControlledPaginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} />;

  it('should render a controlled paginator', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });
});
