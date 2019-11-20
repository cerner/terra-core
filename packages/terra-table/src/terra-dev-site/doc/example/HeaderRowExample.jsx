import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const HeaderRowExample = () => (
  <React.Fragment>
    <Table
      paddingStyle="standard"
      headerData={{
        key: 'default',
        id: 'default',
        refCallback: () => {},
        cells:[
          {
            id: 'header-key-0',
            key: 'key-0',
            children: [
              'Default Header',
            ],
          },
          {
            id: 'header-key-1',
            key: 'key-1',
            children: [
              'Default Header',
            ],
          },
        ],
      }}
    />
    <Table
      paddingStyle="standard"
      rowStyle="disclose"
      hasChevrons
      headerData={{
        key: 'selection-chevron',
        id: 'chevron',
        refCallback: () => {},
        cells:[
          {
            id: 'header-key-0',
            key: 'key-0',
            children: [
              'Selection Style Chevron',
            ],
          },
          {
            id: 'header-key-1',
            key: 'key-1',
            children: [
              'Selection Style Chevron',
            ],
          },
        ],
      }}
    />
    <Table
      paddingStyle="standard"
      checkStyle="toggle"
      headerData={{
        key: 'selection-checkmark',
        id: 'check',
        refCallback: () => {},
        cells:[
          {
            id: 'header-key-0',
            key: 'key-0',
            children: [
              'Selection Style Checkmark',
            ],
          },
          {
            id: 'header-key-1',
            key: 'key-1',
            children: [
              'Selection Style Checkmark',
            ],
          },
        ],
      }}
    />
  </React.Fragment>
);

export default HeaderRowExample;
