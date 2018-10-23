import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List from 'terra-list/lib/List';
import Placeholder from 'terra-doc-template/lib/Placeholder';

const ListExample = () => (
  <List>
    <List.Item>
      <Placeholder title="Item 0" key="123" />
    </List.Item>
    <List.Item>
      <Placeholder title="Item 1" key="124" />
    </List.Item>
    <List.Item>
      <Placeholder title="Item 2" key="125" />
    </List.Item>
  </List>
);

export default ListExample;
