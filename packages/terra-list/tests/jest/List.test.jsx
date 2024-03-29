import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import List, { Item, Section } from '../../src/index';

// Snapshot Tests
it('should render with items', () => {
  const item1 = <Item key="123" />;
  const item2 = <Item key="124" />;
  const item3 = <Item key="125" />;
  const item4 = <Item key="126" />;
  const item5 = <Item key="127" />;
  const items = [item1, item2, item3, item4, item5];
  const shallowComponent = enzymeIntl.shallowWithIntl(<List>{items}</List>).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with no items', () => {
  const shallowComponent = enzymeIntl.shallowWithIntl(<List />).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with standard divided items', () => {
  const item1 = <Item key="123" />;
  const item2 = <Item key="124" />;
  const item3 = <Item key="125" />;
  const item4 = <Item key="126" />;
  const item5 = <Item key="127" />;
  const items = [item1, item2, item3, item4, item5];
  const shallowComponent = enzymeIntl.shallowWithIntl(<List dividerStyle="standard">{items}</List>).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with bottom only divided items', () => {
  const item1 = <Item key="123" />;
  const item2 = <Item key="124" />;
  const item3 = <Item key="125" />;
  const item4 = <Item key="126" />;
  const item5 = <Item key="127" />;
  const items = [item1, item2, item3, item4, item5];
  const shallowComponent = enzymeIntl.shallowWithIntl(<List dividerStyle="bottom-only">{items}</List>).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with standard padded items', () => {
  const item1 = <Item key="123" />;
  const item2 = <Item key="124" />;
  const item3 = <Item key="125" />;
  const item4 = <Item key="126" />;
  const item5 = <Item key="127" />;
  const items = [item1, item2, item3, item4, item5];
  const shallowComponent = enzymeIntl.shallowWithIntl(<List paddingStyle="standard">{items}</List>).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with thin padded items', () => {
  const item1 = <Item key="123" />;
  const item2 = <Item key="124" />;
  const item3 = <Item key="125" />;
  const item4 = <Item key="126" />;
  const item5 = <Item key="127" />;
  const items = [item1, item2, item3, item4, item5];
  const shallowComponent = enzymeIntl.shallowWithIntl(<List paddingStyle="compact">{items}</List>).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with ariaDescribedBy', () => {
  const item1 = <Item key="123" />;
  const item2 = <Item key="124" />;
  const item3 = <Item key="125" />;
  const item4 = <Item key="126" />;
  const item5 = <Item key="127" />;
  const items = [item1, item2, item3, item4, item5];
  const shallowComponent = enzymeIntl.shallowWithIntl(
    <div>
      <p id="list-help"> Navigate this list using the arrow keys. </p>
      <List ariaDescribedBy="list-help">{items}</List>
    </div>,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with ariaDescription', () => {
  const item1 = <Item key="123" />;
  const item2 = <Item key="124" />;
  const item3 = <Item key="125" />;
  const item4 = <Item key="126" />;
  const item5 = <Item key="127" />;
  const items = [item1, item2, item3, item4, item5];
  const shallowComponent = enzymeIntl.shallowWithIntl(
    <List ariaDescription="Navigate this list using the arrow keys.">{items}</List>,
  ).dive();
  expect(shallowComponent).toMatchSnapshot();
});
it('should render with ariaDetails', () => {
  const item1 = <Item key="123" />;
  const item2 = <Item key="124" />;
  const item3 = <Item key="125" />;
  const item4 = <Item key="126" />;
  const item5 = <Item key="127" />;
  const items = [item1, item2, item3, item4, item5];
  const shallowComponent = enzymeIntl.shallowWithIntl(
    <div>
      <p id="list-details"> Here is some more information about this list. </p>
      <List ariaDetails="list-details">{items}</List>
    </div>,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with ariaDescribedBy', () => {
  const item1 = <Item key="123" />;
  const item2 = <Item key="124" />;
  const item3 = <Item key="125" />;
  const item4 = <Item key="126" />;
  const item5 = <Item key="127" />;
  const items = [item1, item2, item3, item4, item5];
  const shallowComponent = enzymeIntl.shallowWithIntl(
    <div>
      <p id="list-help"> Navigate this list using the arrow keys. </p>
      <List ariaDescribedBy="list-help">{items}</List>
    </div>,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with ariaDescription', () => {
  const item1 = <Item key="123" />;
  const item2 = <Item key="124" />;
  const item3 = <Item key="125" />;
  const item4 = <Item key="126" />;
  const item5 = <Item key="127" />;
  const items = [item1, item2, item3, item4, item5];
  const shallowComponent = enzymeIntl.shallowWithIntl(
    <List ariaDescription="Navigate this list using the arrow keys.">{items}</List>,
  ).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with ariaDetails', () => {
  const item1 = <Item key="123" />;
  const item2 = <Item key="124" />;
  const item3 = <Item key="125" />;
  const item4 = <Item key="126" />;
  const item5 = <Item key="127" />;
  const items = [item1, item2, item3, item4, item5];
  const shallowComponent = enzymeIntl.shallowWithIntl(
    <div>
      <p id="list-details"> Here is some more information about this list. </p>
      <List ariaDetails="list-details">{items}</List>
    </div>,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with single select aria attributes with ariaSelectionStyle single-select', () => {
  const item1 = <Item key="123" />;
  const item2 = <Item key="124" />;
  const item3 = <Item key="125" />;
  const item4 = <Item key="126" />;
  const item5 = <Item key="127" />;
  const items = [item1, item2, item3, item4, item5];
  const shallowComponent = enzymeIntl.shallowWithIntl(
    <List ariaSelectionStyle="single-select">{items}</List>,
  ).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with mutli select aria attributes with ariaSelectionStyle mutli-select', () => {
  const item1 = <Item key="123" />;
  const item2 = <Item key="124" />;
  const item3 = <Item key="125" />;
  const item4 = <Item key="126" />;
  const item5 = <Item key="127" />;
  const items = [item1, item2, item3, item4, item5];
  const shallowComponent = enzymeIntl.shallowWithIntl(
    <List ariaSelectionStyle="multi-select">{items}</List>,
  ).dive();
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with null sections', () => {
  const shallowComponent = enzymeIntl.shallowWithIntl(
    <List dividerStyle="standard" role="listbox">
      <Section title="section 1" isCollapsed />
      <Section title="section 2" isCollapsed />
      { null }
    </List>,
  );
  const listSection = shallowComponent.find('ListSection');
  const list = shallowComponent.find('List');
  expect(listSection).toBeDefined();
  expect(list.children().length).toBe(2);
  expect(shallowComponent).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const wrapper = enzymeIntl.mountWithIntl(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <List />
    </ThemeContextProvider>,
  );
  expect(wrapper).toMatchSnapshot();
});
