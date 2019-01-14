import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import MultiSelectList from 'terra-list/lib/MultiSelectList';

const list = () => (
  <div>
    <h2>Examples</h2>
    <h3>Multi Select List</h3>
    <MultiSelectList isDivided>
      <MultiSelectList.Item content={<span>test</span>} key="123" />
      <MultiSelectList.Item content={<span>test</span>} key="124" />
      <MultiSelectList.Item content={<span>test</span>} key="125" />
    </MultiSelectList>
    <h3>Multi Select List (Max Selectable: 2)</h3>
    <MultiSelectList maxSelectionCount={2}>
      <MultiSelectList.Item content={<span>test</span>} key="123" />
      <MultiSelectList.Item content={<span>test</span>} key="124" />
      <MultiSelectList.Item content={<span>test</span>} key="125" />
    </MultiSelectList>
  </div>
);

export default list;
