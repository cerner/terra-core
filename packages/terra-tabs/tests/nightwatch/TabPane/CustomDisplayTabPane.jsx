import React from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import TabPane from '../../../lib/TabPane';

const CustomDisplayTabPane = () => (
  <div>
    <p>Tab label with custom content.</p>
    <TabPane
      label="Custom Display"
      id="customDisplay"
      customDisplay={
        <div id="customDisplayContent">
          <span style={{ marginRight: '15px' }}>
            Custom Display
          </span>
          <IconSearch />
        </div>
      }
    />
  </div>
);

export default CustomDisplayTabPane;
