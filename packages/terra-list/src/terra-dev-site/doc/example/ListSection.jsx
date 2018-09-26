import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List from 'terra-list/lib/List';
import ListSection from 'terra-list/lib/ListSection';

const ListSectionExample = () => (
  <List isDivided>
    <ListSection title="open title" key="1" refCallback={node => console.log(node)}>
      <List.Item content={<span>test</span>} key="123" />
      <List.Item content={<span>test</span>} key="124" />
      <List.Item content={<span>test</span>} key="125" />
    </ListSection>
    <ListSection isCollapsed title="collapsed title" key="2" refCallback={node => console.log(node)}>
      <List.Item content={<span>test</span>} key="123" />
      <List.Item content={<span>test</span>} key="124" />
      <List.Item content={<span>test</span>} key="125" />
    </ListSection>
  </List>
);

export default ListSectionExample;
