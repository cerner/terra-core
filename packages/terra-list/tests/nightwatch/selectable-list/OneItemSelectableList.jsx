import React from 'react';

import SelectableList from '../../../lib/SelectableList';

const list = () => (
  <SelectableList id="example-list">
    <SelectableList.Item content={<p>test 1</p>} key="123" />
  </SelectableList>
 );

export default list;
