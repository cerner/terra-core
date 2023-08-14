import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';

import { Item, Subsection } from '../../src/index';

// Snapshot Tests
it('should render with items', () => {
  const item1 = <Item key="123" />;
  const item2 = <Item key="124" />;
  const item3 = <Item key="125" />;
  const item4 = <Item key="126" />;
  const item5 = <Item key="127" />;
  const items = [item1, item2, item3, item4, item5];
  const shallowComponent = shallowWithIntl(<Subsection title="test">{items}</Subsection>).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with no items', () => {
  const shallowComponent = shallowWithIntl(<Subsection title="test" />).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with level', () => {
  const shallowComponent = shallowWithIntl(<Subsection title="test" level={3} />).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsed', () => {
  const shallowComponent = shallowWithIntl(<Subsection title="test" isCollapsed />).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsible', () => {
  const shallowComponent = shallowWithIntl(<Subsection title="test" isCollapsible />).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with callback functions', () => {
  const shallowComponent = shallowWithIntl(<Subsection title="test" refCallback={jest.fn()} onSelect={jest.fn()} />).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const wrapper = mountWithIntl(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <Subsection title="test" />
    </ThemeContextProvider>,
  );
  expect(wrapper).toMatchSnapshot();
});
