import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { SectionHeader } from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableSectionHeaderExample = () => (
  <Table
    sectionData={[
      {
        sectionHeader: {
          title: 'Default SectionHeader',
          key: 'default',
        },
      },
    ]}
  />
);

export default TableSectionHeaderExample;
