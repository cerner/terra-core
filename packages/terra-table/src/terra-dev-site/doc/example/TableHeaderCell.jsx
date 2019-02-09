import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Header, HeaderCell } from 'terra-table/lib/index';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconPill from 'terra-icon/lib/icon/IconPill';
import IconLightbulb from 'terra-icon/lib/icon/IconLightbulb';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableHeaderCellExample = () => (
  <Table header={(
    <Header>
      <HeaderCell
        icon={<IconSearch />}
      >
        Lorem ipsum dolor
      </HeaderCell>
      <HeaderCell
        icon={<IconPill />}
        isSelectable
        sort="asc"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </HeaderCell>
      <HeaderCell
        icon={<IconLightbulb />}
        isSelectable
        sort="desc"
      >
        Lorem
      </HeaderCell>
    </Header>
  )}
  />
);

export default TableHeaderCellExample;
