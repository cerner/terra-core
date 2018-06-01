import React from 'react';
import Hyperlink from '../../src/Hyperlink';

describe('Hyperlink', () => {
  // Snapshot Tests
  it('should render a default hyperlink', () => {
    const wrapper = render(<Hyperlink href="https://www.cerner.com">Default hyperlink</Hyperlink>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled hyperlink', () => {
    const wrapper = render(<Hyperlink href="https://www.cerner.com" isDisabled>Disabled hyperlink</Hyperlink>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a audio hyperlink', () => {
    const wrapper = render(<Hyperlink href="https://www.cerner.com" variant="audio">Audio hyperlink</Hyperlink>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a document hyperlink', () => {
    const wrapper = render(<Hyperlink href="https://www.cerner.com" variant="document">Document hyperlink</Hyperlink>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a external hyperlink', () => {
    const wrapper = render(<Hyperlink href="https://www.cerner.com" variant="external">External hyperlink</Hyperlink>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a image hyperlink', () => {
    const wrapper = render(<Hyperlink href="https://www.cerner.com" variant="image">Image hyperlink</Hyperlink>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a underline hidden hyperlink', () => {
    const wrapper = render(<Hyperlink href="https://www.cerner.com" isUnderlineHidden>Underline hidden hyperlink</Hyperlink>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a video hyperlink', () => {
    const wrapper = render(<Hyperlink href="https://www.cerner.com" variant="video">Video hyperlink</Hyperlink>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with custom props', () => {
    const wrapper = render(<Hyperlink href="https://www.cerner.com" target="_self" rel="nofollow">Custom props hyperlink</Hyperlink>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with custom props with external variant', () => {
    const wrapper = render(<Hyperlink href="https://www.cerner.com" target="_parent" rel="external" variant="external">Custom target and rel props external hyperlink</Hyperlink>);
    expect(wrapper).toMatchSnapshot();
  });
});
