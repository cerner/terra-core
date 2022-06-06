import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mountWithIntl, renderWithIntl } from '@cerner/terra-enzyme-intl';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import Hyperlink from '../../src/Hyperlink';

describe('Hyperlink', () => {
  // Snapshot Tests
  it('should render a default hyperlink', () => {
    const wrapper = renderWithIntl(<Hyperlink text="Default hyperlink" href="https://www.cerner.com" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled hyperlink', () => {
    const wrapper = renderWithIntl(<Hyperlink text="Disabled hyperlink" href="https://www.cerner.com" isDisabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a audio hyperlink', () => {
    const wrapper = renderWithIntl(<Hyperlink text="Audio hyperlink" href="https://www.cerner.com" variant="audio" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a document hyperlink', () => {
    const wrapper = renderWithIntl(<Hyperlink text="Document hyperlink" href="https://www.cerner.com" variant="document" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a external hyperlink', () => {
    const wrapper = renderWithIntl(<Hyperlink text="External hyperlink" href="https://www.cerner.com" variant="external" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a image hyperlink', () => {
    const wrapper = renderWithIntl(<Hyperlink text="Image hyperlink" href="https://www.cerner.com" variant="image" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a underline hidden hyperlink', () => {
    const wrapper = renderWithIntl(<Hyperlink text="Underline hidden hyperlink" href="https://www.cerner.com" isUnderlineHidden />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a video hyperlink', () => {
    const wrapper = renderWithIntl(<Hyperlink text="Video hyperlink" href="https://www.cerner.com" variant="video" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with custom props', () => {
    const wrapper = renderWithIntl(<Hyperlink text="Custom props hyperlink" href="https://www.cerner.com" target="_self" rel="nofollow" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with custom props with external variant', () => {
    const wrapper = renderWithIntl(<Hyperlink text="Custom target and rel props external hyperlink" href="https://www.cerner.com" target="_parent" rel="external" variant="external" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <Hyperlink text="Default hyperlink" href="https://www.cerner.com" />
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
