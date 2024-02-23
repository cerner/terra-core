import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import ShowHide from '../../src/ShowHide';

describe('ShowHide', () => {
  let mockSpyUuid;
  beforeAll(() => {
    mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
  });

  afterAll(() => {
    mockSpyUuid.mockRestore();
  });

  // Snapshot Tests
  it('should render a default show-hide component', () => {
    const showHide = enzymeIntl.mountWithIntl(<ShowHide preview={<p>Test</p>} onChange={e => typeof e}>Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  it('should render a no preview show-hide component', () => {
    const showHide = enzymeIntl.mountWithIntl(<ShowHide onChange={e => typeof e}>Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  it('should render an initially open show-hide component', () => {
    const showHide = enzymeIntl.mountWithIntl(<ShowHide preview={<p>Test</p>} onChange={e => typeof e} isOpen>Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  it('should render a center-aligned button show-hide component', () => {
    const showHide = enzymeIntl.mountWithIntl(<ShowHide preview={<p>Test</p>} onChange={e => typeof e} buttonAlign="center">Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  // Prop Tests
  it('should set children prop correctly', () => {
    const showHide = enzymeIntl.mountWithIntl(<ShowHide preview={<p>Test</p>} onChange={e => typeof e}>Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  it('should set buttonText prop correctly when it is collapsed', () => {
    const showHide = enzymeIntl.mountWithIntl(<ShowHide preview={<p>Test</p>} onChange={e => typeof e} buttonText="Collapsed Text" isOpen={false}>Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  it('should set buttonText prop correctly when it is expanded', () => {
    const showHide = enzymeIntl.mountWithIntl(<ShowHide preview={<p>Test</p>} onChange={e => typeof e} buttonText="Expanded Text" isOpen>Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  it('should set isOpen prop correctly', () => {
    const showHide = enzymeIntl.mountWithIntl(<ShowHide preview={<p>Test</p>} onChange={e => typeof e} isOpen>Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  it('should set the button to align right', () => {
    const showHide = enzymeIntl.mountWithIntl(<ShowHide preview={<p>Test</p>} onChange={e => typeof e} buttonAlign="end">Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  it('should set preview prop correctly', () => {
    const showHide = enzymeIntl.mountWithIntl(<ShowHide preview={<p>Preview Text</p>} onChange={e => typeof e}>Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  // Attributes
  it('should merge classes passed in with attributes', () => {
    const showHide = enzymeIntl.mountWithIntl(<ShowHide className="TestClass" preview={<p>Test</p>} onChange={e => typeof e}>Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  it('should merge ids passed in with attributes', () => {
    const showHide = enzymeIntl.mountWithIntl(<ShowHide id="TestId" preview={<p>Test</p>} onChange={e => typeof e}>Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  it('should append data passed in with attributes', () => {
    const showHide = enzymeIntl.mountWithIntl(<ShowHide data-terra-text-mock="MockData" preview={<p>Test</p>} onChange={e => typeof e}>Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
  });

  it('should append styles passed in with attributes', () => {
    /* eslint-disable react/forbid-component-props */
    const showHide = enzymeIntl.mountWithIntl(<ShowHide style={{ height: '100px' }} preview={<p>Test</p>} onChange={e => typeof e}>Full Text</ShowHide>);
    expect(showHide).toMatchSnapshot();
    /* eslint-disable react/forbid-component-props */
  });

  // Error Handling Test
  it('should throw error for required children', () => {
    try {
      enzymeIntl.mountWithIntl(<ShowHide onChange={e => typeof e} />);
    } catch (e) {
      expect(e.message).toContain('The prop `children` is marked as required');
    }
  });

  it('should throw error for required onChange prop', () => {
    try {
      enzymeIntl.mountWithIntl(<ShowHide>Full Text</ShowHide>);
    } catch (e) {
      expect(e.message).toContain('The prop `onChange` is marked as required');
    }
  });

  it('should throw error for required intl prop', () => {
    try {
      enzyme.render(<ShowHide onChange={e => typeof e}>Full Text</ShowHide>);
    } catch (e) {
      expect(e.message).toContain('[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.');
    }
  });

  it('correctly applies the theme context className', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        <ShowHide preview={<p>Test</p>} onChange={e => typeof e}>Full Text</ShowHide>
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
