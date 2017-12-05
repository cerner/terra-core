import React from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import TabPane from '../../../lib/TabPane';

const IconOnlyTabPane = () => (
  <div>
    <p>Tab label with icon only.</p>
    <TabPane
      label="Icon Only"
      id="iconOnly"
      icon={<IconSearch />}
      isIconOnly
    />
  </div>
);

export default IconOnlyTabPane;
