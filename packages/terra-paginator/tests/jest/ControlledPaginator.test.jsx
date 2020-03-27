import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import ControlledPaginator from '../../src/ControlledPaginator';

describe('Paginator', () => {
  const defaultRender = <ControlledPaginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} />;

  // Snapshot Tests
  it('should render a Controlled Paginator - Tiny', () => {
    const wrapper = shallowWithIntl(defaultRender).dive();
    wrapper.setState({ breakpoint: 'tiny' });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  // Snapshot Tests
  it('should render a Controlled Paginator - Large', () => {
    const wrapper = shallowWithIntl(defaultRender).dive();
    wrapper.setState({ breakpoint: 'large' });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });
});
