import React from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import TabPane from '../../../../TabPane';

const IconAndTextTabPane = () => (
  <div role="tablist" style={{ display: 'flex' }}>
    <TabPane
      label="Icon and Text"
      id="iconAndText"
      icon={<IconSearch />}
    />
  </div>
);

export default IconAndTextTabPane;
