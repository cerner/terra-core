import React from 'react';

import SingleSelectList from '../../../lib/SingleSelectList';

const list = () => (
  <SingleSelectList>
    <SingleSelectList.Item content={<p>test 1</p>} key="123" isSelectable />
  </SingleSelectList>
 );

export default list;
