import React from 'react';

import List from '../../../lib/List';

const list = () => (
  <List>
    <List.Item content={<p>test 1</p>} key="123" />
    <List.Item content={<p>test 2</p>} key="124" />
    <List.Item content={<p>test 3</p>} key="125" />
  </List>
 );

export default list;
