import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import ListItem from '../../src/ListItem';

// Snapshot Tests
it('should render with className', () => {
  const shallowComponent = shallowWithIntl(<ListItem className="textClass" />).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with content', () => {
  const shallowComponent = shallowWithIntl(<ListItem><p>text</p></ListItem>).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with selected', () => {
  const shallowComponent = shallowWithIntl(<ListItem isSelectable isSelected />).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isSelectable', () => {
  const shallowComponent = shallowWithIntl(<ListItem isSelectable />).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with hasChevron', () => {
  const shallowComponent = shallowWithIntl(<ListItem hasChevron />).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with callback functions', () => {
  const mockCallBack = jest.fn();

  const shallowComponent = shallowWithIntl(
    <ListItem title="test" isSelectable onSelect={mockCallBack} refCallback={jest.fn()} />,
  ).dive();
  expect(shallowComponent).toMatchSnapshot();
  shallowComponent.find('li').simulate('click');
  shallowComponent.find('li').simulate('keydown', { nativeEvent: { keyCode: 13 } });
  shallowComponent.find('li').simulate('keydown', { nativeEvent: { keyCode: 32 } });
  expect(mockCallBack.mock.calls.length).toEqual(3);
});

it('should render with tabindex -1 when isTabFocusDisabled is set to true', () => {
  const mockCallBack = jest.fn();

  const shallowComponent = shallowWithIntl(
    <ListItem title="test" isSelectable isTabFocusDisabled onSelect={mockCallBack} refCallback={jest.fn()} />,
  ).dive();

  expect(shallowComponent.prop('tabIndex')).toContain('-1');
  // expect(shallowComponent.find('li').getAttribute('tabindex')).toEqual(-1);
  expect(shallowComponent).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const wrapper = mountWithIntl(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <ListItem />
    </ThemeContextProvider>,
  );
  expect(wrapper).toMatchSnapshot();
});
