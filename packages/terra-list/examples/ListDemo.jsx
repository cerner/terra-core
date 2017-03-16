import React from 'react';

import List from '../lib/List';

export default () => <List isDivided>
  <List.Item content={<p>test</p>} key="123" />
  <List.Item content={<p>test</p>} key="124" />
  <List.Item content={<p>test</p>} key="125" />
</List>;
