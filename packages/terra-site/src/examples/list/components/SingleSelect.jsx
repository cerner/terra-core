import React from 'react';

import SingleSelectList from 'terra-list/lib/SingleSelectList';

const list = () => (
  <div>
    <h1>Single Select List</h1>
    <SingleSelectList hasChevrons isDivided>
      <SingleSelectList.Item content={<span>test</span>} key="123" />
      <SingleSelectList.Item content={<span>test</span>} key="124" />
      <SingleSelectList.Item content={<span>test</span>} key="125" />
    </SingleSelectList>
  </div>);

export default list;
