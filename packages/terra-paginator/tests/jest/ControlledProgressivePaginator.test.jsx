import React from 'react';
import ControlledProgressivePaginator from '../../src/ControlledProgressivePaginator';

describe('Paginator', () => {
  const defaultRender = <ControlledProgressivePaginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} />;

  it('should render a controlled progressive paginator', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });
});
