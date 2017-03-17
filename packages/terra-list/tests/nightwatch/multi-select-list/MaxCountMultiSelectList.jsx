import React from 'react';

import MultiSelectList from '../../../lib/MultiSelectList';

const list = () => (
  <MultiSelectList maxSelectionCount={2}>
    <MultiSelectList.Item content={<p>test 1</p>} key="123" isSelected />
    <MultiSelectList.Item content={<p>test 2</p>} key="124" isSelected />
    <MultiSelectList.Item content={<p>test 3</p>} key="125" isSelected />
  </MultiSelectList>
 );

export default list;
