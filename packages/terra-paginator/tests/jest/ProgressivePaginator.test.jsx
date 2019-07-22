import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import ProgressivePaginator from '../../src/ProgressivePaginator';

describe('ProgressivePaginator', () => {
  const defaultRender = <ProgressivePaginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} />;

  // Snapshot Tests
  it('should render a default ProgressivePaginator', () => {
    const wrapper = shallowWithIntl(defaultRender).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
