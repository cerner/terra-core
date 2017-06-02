import React from 'react';

import MultiSelectList from '../../../lib/MultiSelectList';

const list = () => (
  <MultiSelectList>
    <MultiSelectList.Item content={<p>test 1</p>} key="123" isSelectable />
  </MultiSelectList>
 );

export default list;
