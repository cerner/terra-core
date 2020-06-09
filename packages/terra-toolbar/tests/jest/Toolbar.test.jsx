import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import Toolbar from '../../src/Toolbar';

describe('Toolbar', () => {
  const defaultRender = <Toolbar />;

  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.hasClass('align-start'));
  });

  it('should render with children', () => {
    const wrapper = shallow(<Toolbar><div>test</div></Toolbar>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render start aligned component', () => {
    const wrapper = shallow(<Toolbar align="start" />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.hasClass('align-start'));
  });

  it('should render end aligned component', () => {
    const wrapper = shallow(<Toolbar align="end" />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.hasClass('align-end'));
  });

  it('should render center aligned component', () => {
    const wrapper = shallow(<Toolbar align="center" />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.hasClass('align-center'));
  });

  it('should apply custom class', () => {
    const wrapper = shallow(<Toolbar className="testing" />);
    expect(wrapper.hasClass('testing'));
  });

  it('correctly applies the theme context className', () => {
    const wrapper = mount(
      <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
        {defaultRender}
      </ThemeContextProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
