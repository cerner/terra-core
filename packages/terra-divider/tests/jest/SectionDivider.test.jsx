import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import SectionDivider from '../../src/_SectionDivider';

describe('Divider', () => {
  const defaultRender = <SectionDivider />;

  // Snapshot Tests
  it('should render a basic component', () => {
    const wrapper = enzyme.shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should pass the All the Props', () => {
    const wrapper = enzyme.shallow(<SectionDivider id="testDivider" text="custom-text" level={3} />);
    expect(wrapper).toMatchSnapshogt();
  });

  it('should apply the theme context className to the text divider', () => {
    const wrapper = enzyme.mount(
      <ThemeContextProvider theme={{ className: 'theme-class-name' }}>
        <SectionDivider text="custom-text" level={3} id="testDivider" />
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('div').hasClass('theme-class-name')).toBe(true);
  });
});
