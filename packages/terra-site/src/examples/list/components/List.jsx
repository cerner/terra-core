import React from 'react';

import List from 'terra-list';

const list = () => (
  <div>
    <h1>List</h1>
    <List isDivided>
      <List.Item content={<span>test</span>} key="123" />
      <List.Item content={<span>test</span>} key="124" />
      <List.Item content={<span>test</span>} key="125" />
    </List>
  </div>);

export default list;
