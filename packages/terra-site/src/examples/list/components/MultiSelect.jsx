import React from 'react';

import MultiSelectList from 'terra-list/lib/MultiSelectList';

const list = () => (
  <div>
    <h1>Multi Select List</h1>
    <MultiSelectList isDivided>
      <MultiSelectList.Item content={<span>test</span>} key="123" />
      <MultiSelectList.Item content={<span>test</span>} key="124" />
      <MultiSelectList.Item content={<span>test</span>} key="125" />
    </MultiSelectList>
    <h1>Multi Select List (Max Selectable: 2)</h1>
    <MultiSelectList maxSelectionCount={2}>
      <MultiSelectList.Item content={<span>test</span>} key="123" />
      <MultiSelectList.Item content={<span>test</span>} key="124" />
      <MultiSelectList.Item content={<span>test</span>} key="125" />
    </MultiSelectList>
  </div>);

export default list;
