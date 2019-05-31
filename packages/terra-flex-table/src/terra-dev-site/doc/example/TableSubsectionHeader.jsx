import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { SubsectionHeader } from 'terra-flex-table/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableSubsectionHeaderExample = () => (
  <Table>
    <SubsectionHeader colSpan={1} title="Default SubsectionHeader" key="default" />
  </Table>
);

export default TableSubsectionHeaderExample;
