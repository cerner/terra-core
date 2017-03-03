import React from 'react';

import MultiSelectList from '../../../lib/MultiSelectList';

export default () => <MultiSelectList onChange={event => event.delegateTarget}>
  <MultiSelectList.Item content={<p>test</p>} key="123" />
  <MultiSelectList.Item content={<p>test</p>} key="124" />
  <MultiSelectList.Item content={<p>test</p>} key="125" />
</MultiSelectList>;
