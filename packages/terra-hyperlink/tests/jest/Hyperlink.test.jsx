import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mountWithIntl, renderWithIntl } from 'terra-enzyme-intl';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import Hyperlink from '../../src/Hyperlink';

describe('Hyperlink', () => {
  // Snapshot Tests
  it('should render a default hyperlink', () => {
    const wrapper = renderWithIntl(<Hyperlink href="https://www.cerner.com" text="Default hyperlink" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled hyperlink', () => {
    const wrapper = renderWithIntl(<Hyperlink href="https://www.cerner.com" isDisabled text="Disabled hyperlink" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a audio hyperlink', () => {
    const wrapper = renderWithIntl(<Hyperlink href="https://www.cerner.com" variant="audio" text="Audio hyperlink" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a document hyperlink', () => {
    const wrapper = renderWithIntl(<Hyperlink href="https://www.cerner.com" variant="document" text="Document hyperlink" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a external hyperlink', () => {
    const wrapper = renderWithIntl(<Hyperlink href="https://www.cerner.com" variant="external" text="External hyperlink" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a image hyperlink', () => {
    const wrapper = renderWithIntl(<Hyperlink href="https://www.cerner.com" variant="image" text="Image hyperlink" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a underline hidden hyperlink', () => {
    const wrapper = renderWithIntl(<Hyperlink href="https://www.cerner.com" isUnderlineHidden text="Underline hidden hyperlink" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a video hyperlink', () => {
    const wrapper = renderWithIntl(<Hyperlink href="https://www.cerner.com" variant="video" text="Video hyperlink" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with custom props', () => {
    const wrapper = renderWithIntl(<Hyperlink href="https://www.cerner.com" target="_self" rel="nofollow" text="Custom props hyperlink" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with custom props with external variant', () => {
    const wrapper = renderWithIntl(<Hyperlink href="https://www.cerner.com" target="_parent" rel="external" variant="external" text="Custom target and rel props external hyperlink" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a hyperlink button when oonClick is provided', () => {
    const wrapper = renderWithIntl(<Hyperlink text="Default hyperlink button" onClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <Hyperlink href="https://www.cerner.com" text="Default hyperlink" />
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
