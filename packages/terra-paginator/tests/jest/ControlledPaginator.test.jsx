import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import ControlledPaginator from '../../src/ControlledPaginator';

describe('Paginator', () => {
  const defaultRender = <ControlledPaginator onPageChange={(e) => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} />;

  // Snapshot Tests
  it('should render a Controlled Paginator', () => {
    const wrapper = shallowWithIntl(defaultRender).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
