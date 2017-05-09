import React from 'react';

import MultiSelectList from 'terra-list/lib/MultiSelectList';

const list = () => (
  <MultiSelectList isDivided>
    <MultiSelectList.Item content={<p>test</p>} key="123" isSelected />
    <MultiSelectList.Item content={<p>test</p>} key="124" isSelected />
    <MultiSelectList.Item content={<p>test</p>} key="125" isSelectable />
  </MultiSelectList>);

export default list;
