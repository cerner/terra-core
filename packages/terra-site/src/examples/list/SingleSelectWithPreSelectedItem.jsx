import React from 'react';

import SingleSelectList from 'terra-list/lib/SingleSelectList';

const list = () => (
  <SingleSelectList hasChevrons isDivided>
    <SingleSelectList.Item content={<p>test</p>} key="123" isSelectable />
    <SingleSelectList.Item content={<p>test</p>} key="124" isSelectable isSelected />
    <SingleSelectList.Item content={<p>test</p>} key="125" isSelectable />
  </SingleSelectList>);

export default list;
