import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List from 'terra-list/lib/List';

const ListExample = () => (
  <div>
    <List isDivided>
      <List.Item content={<span>test</span>} key="123" />
      <List.Item content={<span>test</span>} key="124" />
      <List.Item content={<span>test</span>} key="125" />
    </List>
  </div>
);

export default ListExample;
