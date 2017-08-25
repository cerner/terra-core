import React from 'react';
import ThemeProvider from '../../src/ThemeProvider';

describe('ThemeProvider', () => {
  const defaultRender = (
    <ThemeProvider themeName={ThemeProvider.Opts.Themes.MOCK}>
      <p>Child content</p>
    </ThemeProvider>
  );

  // Snapshot Tests
  it('should shallow render a theme provider component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a theme provider component', () => {
    const wrapper = render(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Error Handling Test
  it('should throw error for required children', () => {
    try {
      shallow(<ThemeProvider />);
    } catch (e) {
      expect(e.message).toContain('The prop `children` is marked as required');
    }
  });
});
