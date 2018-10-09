import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List from 'terra-list/lib/List';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ListSection from 'terra-list/lib/ListSection';

const ListSectionExample = () => (
  <List>
    <ListSection
      header={<p>open title</p>}
      key="1"
    >
      <List.Item key="123">
        <span>test</span>
      </List.Item>
      <List.Item key="124">
        <span>test</span>
      </List.Item>
      <List.Item key="125" isDivided>
        <span>test</span>
      </List.Item>
    </ListSection>
    <ListSection
      isDivided
      isCollapsed
      header={<p>collapsed title</p>}
      key="2"
    >
      <List.Item key="126" isDivided>
        <span>test</span>
      </List.Item>
      <List.Item key="127">
        <span>test</span>
      </List.Item>
      <List.Item key="128">
        <span>test</span>
      </List.Item>
    </ListSection>
  </List>
);

export default ListSectionExample;
