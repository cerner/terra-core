import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { SectionHeader } from 'terra-table/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableRowExample = () => (
  <Table>
    <SectionHeader colSpan={1} title="Default SectionHeader" key="default" />
    <SectionHeader colSpan={1} title="Collapsed SectionHeader" isCollapsed isCollapsible key="collapsed" />
    <SectionHeader colSpan={1} title="Collapsible SectionHeader" isCollapsible key="collapsable" />
  </Table>
);

export default TableRowExample;
