import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { SubsectionHeader } from 'terra-table/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableRowExample = () => (
  <Table>
    <SubsectionHeader title="Default SubsectionHeader" key="default" />
    <SubsectionHeader title="Collapsed SubsectionHeader" isCollapsed isCollapsible key="collapsed" />
    <SubsectionHeader title="Collapsible SubsectionHeader" isCollapsible key="collapsable" />
  </Table>
);

export default TableRowExample;
