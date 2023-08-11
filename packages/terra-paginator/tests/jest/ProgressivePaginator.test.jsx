import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import ProgressivePaginator from '../../src/ProgressivePaginator';

describe('ProgressivePaginator', () => {
  const defaultRender = <ProgressivePaginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} />;
  const renderWithHeadingId = <ProgressivePaginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} ariaLabelledBy="paginator_header_id" />;
  const renderWithAriaLabel = <ProgressivePaginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} ariaLabel="paginator_label" />;

  // Snapshot Tests
  it('should render a default ProgressivePaginator - Tiny', () => {
    const wrapper = shallowWithIntl(defaultRender).dive();
    wrapper.setState({ breakpoint: 'tiny' });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a default ProgressivePaginator - Large', () => {
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
  it('should render a default ProgressivePaginator with heading id set - Tiny', () => {
    const wrapper = shallowWithIntl(renderWithHeadingId).dive();
    wrapper.setState({ breakpoint: 'tiny' });
    wrapper.update();
    expect(wrapper.find('.paginator.progressive').prop('aria-labelledby')).toEqual('paginator_header_id');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a default ProgressivePaginator with aria label set - Tiny', () => {
    const wrapper = shallowWithIntl(renderWithAriaLabel).dive();
    wrapper.setState({ breakpoint: 'tiny' });
    wrapper.update();
    expect(wrapper.find('.paginator.progressive').prop('aria-label')).toEqual('paginator_label');
    expect(wrapper).toMatchSnapshot();
  });
});
