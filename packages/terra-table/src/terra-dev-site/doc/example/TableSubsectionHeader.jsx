import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { SubsectionHeader } from 'terra-table/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableSubsectionHeaderExample = () => (
  <Table>
    <SubsectionHeader colSpan={1} title="Default SubsectionHeader" key="default" />
    <SubsectionHeader colSpan={1} title="Collapsed SubsectionHeader" isCollapsed isCollapsible key="collapsed" />
    <SubsectionHeader colSpan={1} title="Collapsible SubsectionHeader" isCollapsible key="collapsable" />
  </Table>
);

export default TableSubsectionHeaderExample;
