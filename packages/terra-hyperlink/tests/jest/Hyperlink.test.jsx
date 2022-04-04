import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import Hyperlink from '../../src/Hyperlink';

describe('Hyperlink', () => {
  // Snapshot Tests
  it('should render a default hyperlink', () => {
    const wrapper = render(<Hyperlink text="Default hyperlink" href="https://www.cerner.com" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled hyperlink', () => {
    const wrapper = render(<Hyperlink text="Disabled hyperlink" href="https://www.cerner.com" isDisabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a audio hyperlink', () => {
    const wrapper = render(<Hyperlink text="Audio hyperlink" href="https://www.cerner.com" variant="audio" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a document hyperlink', () => {
    const wrapper = render(<Hyperlink text="Document hyperlink" href="https://www.cerner.com" variant="document" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a external hyperlink', () => {
    const wrapper = render(<Hyperlink text="External hyperlink" href="https://www.cerner.com" variant="external" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a image hyperlink', () => {
    const wrapper = render(<Hyperlink text="Image hyperlink" href="https://www.cerner.com" variant="image" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a underline hidden hyperlink', () => {
    const wrapper = render(<Hyperlink text="Underline hidden hyperlink" href="https://www.cerner.com" isUnderlineHidden />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a video hyperlink', () => {
    const wrapper = render(<Hyperlink text="Video hyperlink" href="https://www.cerner.com" variant="video" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with custom props', () => {
    const wrapper = render(<Hyperlink text="Custom props hyperlink" href="https://www.cerner.com" target="_self" rel="nofollow" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with custom props with external variant', () => {
    const wrapper = render(<Hyperlink text="Custom target and rel props external hyperlink" href="https://www.cerner.com" target="_parent" rel="external" variant="external" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const wrapper = mount(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <Hyperlink text="Default hyperlink" href="https://www.cerner.com" />
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
