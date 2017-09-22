/* eslint-disable no-alert */
import React from 'react';

import SelectableList from 'terra-list/lib/SelectableList';

const list = () => (
  <SelectableList hasChevrons isDivided onChange={(event, index) => alert(`Index: ${index} Clicked!`)}>
    <SelectableList.Item content={<span>test</span>} key="123" />
    <SelectableList.Item content={<span>test</span>} key="124" />
    <SelectableList.Item content={<span>test</span>} key="125" />
  </SelectableList>);

export default list;
