import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { SectionHeader } from 'terra-table/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableRowExample = () => (
  <Table>
    <SectionHeader title="Default SectionHeader" key="default" />
    <SectionHeader title="Collapsed SectionHeader" isCollapsed isCollapsible key="collapsed" />
    <SectionHeader title="Collapsible SectionHeader" isCollapsible key="collapsable" />
  </Table>
);

export default TableRowExample;
