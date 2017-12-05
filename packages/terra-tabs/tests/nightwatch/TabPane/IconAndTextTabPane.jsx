import React from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import TabPane from '../../../lib/TabPane';

const IconAndTextTabPane = () => (
  <div>
    <p>Tab label with icon and text.</p>
    <TabPane
      label="Icon and Text"
      id="iconAndText"
      icon={<IconSearch />}
    />
  </div>
);

export default IconAndTextTabPane;
