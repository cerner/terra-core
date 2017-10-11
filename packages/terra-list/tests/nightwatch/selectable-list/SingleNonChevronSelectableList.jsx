import React from 'react';

import SelectableList from '../../../lib/SelectableList';

const list = () => (
  <SelectableList hasChevrons>
    <SelectableList.Item content={<p>test 1</p>} key="123" />
    <SelectableList.Item content={<p>test 2</p>} key="124" />
    <SelectableList.Item content={<p>test 3</p>} key="125" hasChevron={false} />
  </SelectableList>
);

export default list;
