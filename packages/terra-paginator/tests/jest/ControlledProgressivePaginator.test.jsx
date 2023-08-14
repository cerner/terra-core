import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import ControlledProgressivePaginator from '../../src/ControlledProgressivePaginator';

describe('Paginator', () => {
  const defaultRender = <ControlledProgressivePaginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} />;
  const renderWithHeadingId = <ControlledProgressivePaginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} ariaLabelledBy="paginator_header_id" />;
  const renderWithAriaLabel = <ControlledProgressivePaginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} ariaLabel="paginator_label" />;

  // Snapshot Tests
  it('should render a Controlled ProgressivePaginator - Tiny', () => {
    const wrapper = shallowWithIntl(defaultRender).dive();
    wrapper.setState({ breakpoint: 'tiny' });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Controlled ProgressivePaginator - Large', () => {
    const wrapper = shallowWithIntl(defaultRender).dive();
    wrapper.setState({ breakpoint: 'large' });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        {defaultRender}
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render a Controlled ProgressivePaginator with heading id - Tiny', () => {
    const wrapper = shallowWithIntl(renderWithHeadingId).dive();
    wrapper.setState({ breakpoint: 'tiny' });
    wrapper.update();
    expect(wrapper.find('.paginator.progressive').prop('aria-labelledby')).toEqual('paginator_header_id');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Controlled ProgressivePaginator with aria label - Tiny', () => {
    const wrapper = shallowWithIntl(renderWithAriaLabel).dive();
    wrapper.setState({ breakpoint: 'tiny' });
    wrapper.update();
    expect(wrapper.find('.paginator.progressive').prop('aria-label')).toEqual('paginator_label');
    expect(wrapper).toMatchSnapshot();
  });
});
