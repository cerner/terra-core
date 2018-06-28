import React from 'react';
import Button from 'terra-button';
import StatusView from '../../../StatusView';

// const ipsum = 'Lore\u200Bm ip\u00ADsum dolor';
const ipsum = 'Oh mama mia how could this happen, this is one realllllllllllllllyyyyyyyyyylongwordrighthereyesitis';

export default () =>
  <div style={{ width: '140px', border: '1px black solid' }}>
    <StatusView id="statusView" variant="error" title={ipsum} message={ipsum}>
      <Button text={ipsum} key="1" id="button1" />
      <Button text={ipsum} key="2" id="button2" />
    </StatusView>
  </div>;
