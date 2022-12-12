import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import ListSubsectionHeader from '../../src/ListSubsectionHeader';

// Snapshot Tests
it('should render default', () => {
  const shallowComponent = shallow(<ListSubsectionHeader title="test" />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with level', () => {
  const shallowComponent = shallow(<ListSubsectionHeader title="test" level={3} />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsed', () => {
  const shallowComponent = shallow(<ListSubsectionHeader title="test" isCollapsed />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsible', () => {
  const shallowComponent = shallow(<ListSubsectionHeader title="test" isCollapsible />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with callback functions', () => {
  const mockCallBack = jest.fn();

  const shallowComponent = shallow(
    <ListSubsectionHeader title="test" isCollapsible onSelect={mockCallBack} refCallback={jest.fn()} />,
  );
  expect(shallowComponent).toMatchSnapshot();
  shallowComponent.find('div').first().simulate('click');
  shallowComponent.find('div').first().simulate('keydown', { nativeEvent: { keyCode: 13 } });
  shallowComponent.find('div').first().simulate('keydown', { nativeEvent: { keyCode: 32 } });
  expect(mockCallBack.mock.calls.length).toEqual(3);
});

it('correctly applies the theme context className', () => {
  const wrapper = mount(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <ListSubsectionHeader title="test" />
    </ThemeContextProvider>,
  );
  expect(wrapper).toMatchSnapshot();
});
