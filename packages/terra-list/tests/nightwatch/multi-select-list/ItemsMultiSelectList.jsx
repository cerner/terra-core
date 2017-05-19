import React from 'react';

import MultiSelectList from '../../../lib/MultiSelectList';

const list = () => (
  <MultiSelectList>
    <MultiSelectList.Item content={<p>test 1</p>} key="123" isSelectable />
    <MultiSelectList.Item content={<p>test 2</p>} key="124" isSelectable />
    <MultiSelectList.Item content={<p>test 3</p>} key="125" isSelectable />
  </MultiSelectList>
 );

export default list;
