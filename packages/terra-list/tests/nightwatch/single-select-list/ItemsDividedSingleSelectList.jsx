import React from 'react';

import SingleSelectList from '../../../lib/SingleSelectList';

const list = () => (
  <SingleSelectList isDivided>
    <SingleSelectList.Item content={<p>test 1</p>} key="123" />
    <SingleSelectList.Item content={<p>test 2</p>} key="124" />
    <SingleSelectList.Item content={<p>test 3</p>} key="125" />
  </SingleSelectList>
 );

export default list;
