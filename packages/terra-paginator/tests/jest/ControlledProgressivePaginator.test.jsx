import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, renderWithIntl } from 'terra-enzyme-intl';
import ControlledProgressivePaginator from '../../src/ControlledProgressivePaginator';

describe('Paginator', () => {
  const defaultRender = renderWithIntl((
    <ControlledProgressivePaginator
      onPageChange={e => typeof e}
      selectedPage={1}
      totalCount={2234}
      itemCountPerPage={20}
    />
  ));

  // Snapshot Tests
  it('should render a Controlled ProgressivePaginator', () => {
    const wrapper = shallowWithIntl(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });
});
