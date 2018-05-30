import React from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import TabPane from '../../../../TabPane';

const IconOnlyTabPane = () => (
  <div role="tablist" style={{ display: 'flex' }}>
    <TabPane
      label="Icon Only"
      id="iconOnly"
      icon={<IconSearch />}
      isIconOnly
    />
  </div>
);

export default IconOnlyTabPane;
