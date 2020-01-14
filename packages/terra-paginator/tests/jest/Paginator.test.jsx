import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import Paginator from '../../src/Paginator';

describe('Paginator', () => {
  const defaultRender = <Paginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} />;
  const noPagesRender = <Paginator onPageChange={e => typeof e} />;

  // Snapshot Tests
  it('should render a default paginator - Tiny', () => {
    const wrapper = shallowWithIntl(defaultRender).dive();
    wrapper.setState({ breakpoint: 'tiny' });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  // Snapshot Tests
  it('should render a default paginator - Large', () => {
    const wrapper = shallowWithIntl(defaultRender).dive();
    wrapper.setState({ breakpoint: 'large' });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  // Snapshot Tests
  it('should render a paginator without page links - Tiny', () => {
    const wrapper = shallowWithIntl(noPagesRender).dive();
    wrapper.setState({ breakpoint: 'tiny' });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  // Snapshot Tests
  it('should render a paginator without page links - Large', () => {
    const wrapper = shallowWithIntl(noPagesRender).dive();
    wrapper.setState({ breakpoint: 'large' });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });
});
