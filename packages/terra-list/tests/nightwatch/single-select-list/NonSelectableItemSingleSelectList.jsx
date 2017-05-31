import React from 'react';

import SingleSelectList from '../../../lib/SingleSelectList';

const list = () => (
  <div>
    <h2>List Item 3 is non-selectable: </h2>
    <SingleSelectList>
      <SingleSelectList.Item content={<p>test 1</p>} key="123" isSelectable />
      <SingleSelectList.Item content={<p>test 2</p>} key="124" isSelectable />
      <SingleSelectList.Item content={<p>test 3</p>} key="125" />
    </SingleSelectList>
  </div>
 );

export default list;
