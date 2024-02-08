import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import ControlledPaginator from '../../src/ControlledPaginator';

describe('Paginator', () => {
  const defaultRender = <ControlledPaginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} />;
  const renderWithSelectedPage = <ControlledPaginator onPageChange={e => typeof e} selectedPage={2} totalCount={2234} itemCountPerPage={20} />;
  const renderWithHeadingId = <ControlledPaginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} ariaLabelledBy="paginator_header_id" />;
  const renderWithAriaLabel = <ControlledPaginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} ariaLabel="paginator_label" />;

  // Snapshot Tests
  it('should render a Controlled Paginator - Tiny', () => {
    const wrapper = shallowWithIntl(defaultRender).dive();
    wrapper.setState({ breakpoint: 'tiny' });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Controlled Paginator - Large', () => {
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

  it('should render a Controlled Paginator with visually hidden text', () => {
    const wrapper = shallowWithIntl(renderWithSelectedPage).dive();
    wrapper.setState({ breakpoint: 'tiny' });
    wrapper.update();
    wrapper.find('PaginatorButton').first().simulate('click', { nativeEvent: { keyCode: null } });
    expect(wrapper.find('VisuallyHiddenText').first().prop('text')).toEqual('Terra.paginator.pageSelectedWithCount');
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render a Controlled Paginator with heading id set - Tiny', () => {
    const wrapper = shallowWithIntl(renderWithHeadingId).dive();
    wrapper.setState({ breakpoint: 'tiny' });
    wrapper.update();
    expect(wrapper.find('.paginator').prop('aria-labelledby')).toEqual('paginator_header_id');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Controlled Paginator with aria label set - Tiny', () => {
    const wrapper = shallowWithIntl(renderWithAriaLabel).dive();
    wrapper.setState({ breakpoint: 'tiny' });
    wrapper.update();
    expect(wrapper.find('.paginator').prop('aria-label')).toEqual('paginator_label');
    expect(wrapper).toMatchSnapshot();
  });
});
