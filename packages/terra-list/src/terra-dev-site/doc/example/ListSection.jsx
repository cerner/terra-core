import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List from 'terra-list/lib/List';
import ListSection from 'terra-list/lib/ListSection';

const ListSectionExample = () => (
  <List isDivided>
    <ListSection
      header={<p>open title</p>}
      key="1"
      listKey="derp1"
      refCallback={node => console.log(node)}
    >
      <List.Item key="123" listKey="123">
        <span>test</span>
      </List.Item>
      <List.Item key="124" listKey="124">
        <span>test</span>
      </List.Item>
      <List.Item key="125" listKey="125">
        <span>test</span>
      </List.Item>
    </ListSection>
    <ListSection
      isCollapsed
      header={<p>collapsed title</p>}
      key="2"
      listKey="derp2"
      refCallback={node => console.log(node)}
    >
      <List.Item key="126" listKey="126">
        <span>test</span>
      </List.Item>
      <List.Item key="127" listKey="127">
        <span>test</span>
      </List.Item>
      <List.Item key="128" listKey="128">
        <span>test</span>
      </List.Item>
    </ListSection>
  </List>
);

export default ListSectionExample;
