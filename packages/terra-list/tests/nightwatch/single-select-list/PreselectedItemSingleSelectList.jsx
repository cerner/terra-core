import React from 'react';

import SingleSelectList from '../../../lib/SingleSelectList';

const list = () => (
  <SingleSelectList>
    <SingleSelectList.Item content={<p>test 1</p>} key="123" isSelectable />
    <SingleSelectList.Item content={<p>test 2</p>} key="124" isSelected isSelectable />
    <SingleSelectList.Item content={<p>test 3</p>} key="125" isSelectable />
  </SingleSelectList>
 );

export default list;
