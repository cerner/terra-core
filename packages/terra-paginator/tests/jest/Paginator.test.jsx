import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, renderWithIntl } from 'terra-enzyme-intl';
import Paginator from '../../src/Paginator';

describe('Paginator', () => {
  const defaultRender = renderWithIntl(
    <Paginator
      onPageChange={e => typeof e}
      selectedPage={1}
      totalCount={2234}
      itemCountPerPage={20}
    />
  );

  const noPagesRender = renderWithIntl(
    <Paginator
      onPageChange={e => typeof e}
    />
  );

  // Snapshot Tests
  it('should render a default Paginator', () => {
    const wrapper = shallowWithIntl(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a paginator without page links', () => {
    const wrapper = shallowWithIntl(noPagesRender);
    expect(wrapper).toMatchSnapshot();
  });
});
