import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { SectionHeader } from 'terra-flex-table/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableSectionHeaderExample = () => (
  <Table>
    <SectionHeader colSpan={1} title="Default SectionHeader" key="default" />
  </Table>
);

export default TableSectionHeaderExample;
