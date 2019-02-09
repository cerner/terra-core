import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Header, HeaderCell } from 'terra-table/lib/index';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableHeaderCellExample = () => (
  <Table header={(
    <Header>
      <HeaderCell
        icon={<IconSearch />}
      >
        I Like Punch
      </HeaderCell>
      <HeaderCell
        icon={<IconSearch />}
        isSelectable
        sort="asc"
      >
        Turbo Monkey Waffles Use Diaper Assocaiton Taco Cheese Ingredient
      </HeaderCell>
      <HeaderCell
        icon={<IconSearch />}
        isSelectable
        sort="desc"
      >
        Lobster
      </HeaderCell>
    </Header>
  )}
  />
);

export default TableHeaderCellExample;
