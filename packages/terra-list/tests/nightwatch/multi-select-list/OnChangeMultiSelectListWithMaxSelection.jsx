import React from 'react';

import MultiSelectList from '../../../lib/MultiSelectList';

/* eslint-disable no-alert */
const list = () => (
  <MultiSelectList onChange={() => alert('onchange happened')} maxSelectionCount={2} >
    <MultiSelectList.Item content={<p>test 1</p>} key="123" isSelectable />
    <MultiSelectList.Item content={<p>test 2</p>} key="124" isSelectable />
    <MultiSelectList.Item content={<p>test 3</p>} key="125" isSelectable />
  </MultiSelectList>
 );
/* eslint-enable no-alert */

export default list;
