import React from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import TabPane from '../../../../TabPane';

const CustomDisplayTabPane = () => (
  <div role="tablist" style={{ display: 'flex' }}>
    <TabPane
      label="Custom Display"
      id="customDisplay"
      customDisplay={(
        <div id="customDisplayContent">
          <span style={{ marginRight: '15px' }}>
            Custom Display
          </span>
          <IconSearch />
        </div>
)}
    />
  </div>
);

export default CustomDisplayTabPane;
