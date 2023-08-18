import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import Paginator from '../../src/Paginator';

describe('Paginator', () => {
  const defaultRender = <Paginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} />;
  const noPagesRender = <Paginator onPageChange={e => typeof e} />;
  const renderWithSelectedPage = <Paginator onPageChange={e => typeof e} selectedPage={2} totalCount={2234} itemCountPerPage={20} />;
  const renderWithHeadingId = <Paginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} ariaLabelledBy="paginator_header_id" />;
  const renderWithAriaLabel = <Paginator onPageChange={e => typeof e} selectedPage={1} totalCount={2234} itemCountPerPage={20} ariaLabel="paginator_label" />;

  // Snapshot Tests
  it('should render a default paginator - Tiny', () => {
    const wrapper = shallowWithIntl(defaultRender).dive();
    wrapper.setState({ breakpoint: 'tiny' });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a default paginator - Large', () => {
    const wrapper = shallowWithIntl(defaultRender).dive();
    wrapper.setState({ breakpoint: 'large' });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a paginator without page links - Tiny', () => {
    const wrapper = shallowWithIntl(noPagesRender).dive();
    wrapper.setState({ breakpoint: 'tiny' });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a paginator without page links - Large', () => {
    const wrapper = shallowWithIntl(noPagesRender).dive();
    wrapper.setState({ breakpoint: 'large' });
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        {noPagesRender}
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a default paginator with visually hidden text', () => {
    const wrapper = shallowWithIntl(renderWithSelectedPage).dive();
    wrapper.setState({ breakpoint: 'tiny' });
    wrapper.update();
    wrapper.find('PaginatorButton').first().simulate('click', { nativeEvent: { keyCode: null } });
    expect(wrapper.find('VisuallyHiddenText').first().prop('text')).toEqual('Terra.paginator.pageSelectedWithCount');
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render a default paginator with heading id set - Tiny', () => {
    const wrapper = shallowWithIntl(renderWithHeadingId).dive();
    wrapper.setState({ breakpoint: 'tiny' });
    wrapper.update();
    expect(wrapper.find('.paginator').prop('aria-labelledby')).toEqual('paginator_header_id');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a default paginator with aria label set - Tiny', () => {
    const wrapper = shallowWithIntl(renderWithAriaLabel).dive();
    wrapper.setState({ breakpoint: 'tiny' });
    wrapper.update();
    expect(wrapper.find('.paginator').prop('aria-label')).toEqual('paginator_label');
    expect(wrapper).toMatchSnapshot();
  });
});
