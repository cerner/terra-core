import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const HeaderCheckMarkCellExample = () => (
  <React.Fragment>
    <Table
      rowStyle="none"
      checkStyle="none"
      hasChevrons
      headerData={{
        cells: [{
          children: [
            'test'
          ],
        }],
      }}
    />
    <Table
      rowStyle="toggle"
      checkStyle="none"
      headerData={{
        cells: [{
          children: [
            'test'
          ],
        }],
      }}
    />
    <Table
      rowStyle="toggle"
      checkStyle="readOnly"
      headerData={{
        cells: [{
          children: [
            'test'
          ],
        }],
      }}
    />
    <Table
      rowStyle="disclose"
      checkStyle="toggle"
      headerData={{
        cells: [{
          children: [
            'test'
          ],
        }],
      }}
    />
    <Table
      rowStyle="none"
      checkStyle="toggle"
      headerData={{
        allowSelectAll: true,
        selectAllStatus: 'empty',
        cells: [{
          children: [
            'test'
          ],
        }],
      }}
    />
    <Table
      checkStyle="toggle"
      headerData={{
        allowSelectAll: true,
        selectAllStatus: 'checked',
        cells: [{
          children: [
            'test'
          ],
        }],
      }}
    />
    <Table
      checkStyle="toggle"
      headerData={{
        allowSelectAll: true,
        selectAllStatus: 'indeterminate',
        cells: [{
          children: [
            'test'
          ],
        }],
      }}
    />
    <Table
      checkStyle="toggle"
      headerData={{
        isDisabled: true,
        allowSelectAll: true,
        selectAllStatus: 'empty',
        cells: [{
          children: [
            'test'
          ],
        }],
      }}
    />
    <Table
      checkStyle="toggle"
      headerData={{
        allowSelectAll: true,
        selectAllStatus: 'checked',
        isDisabled: true,
        cells: [{
          children: [
            'test'
          ],
        }],
      }}
    />
<Table
      checkStyle="toggle"
      headerData={{
        allowSelectAll: true,
        selectAllStatus: 'indeterminate',
        isDisabled: true,
        cells: [{
          children: [
            'test'
          ],
        }],
      }}
    />
  </React.Fragment>
  // <Table
  //   headerRow={(
  //     <HeaderRow>
  //       <HeaderCheckMarkCell />
  //       <HeaderCheckMarkCell isSelectable alignmentPadding={2} />
  //       <HeaderCheckMarkCell isSelectable />
  //       <HeaderCheckMarkCell isSelectable isSelected />
  //       <HeaderCheckMarkCell isSelectable isSelected isIntermediate />
  //       <HeaderCheckMarkCell isSelectable isDisabled />
  //       <HeaderCheckMarkCell isSelectable isDisabled isSelected />
  //       <HeaderCheckMarkCell isSelectable isDisabled isSelected isIntermediate />
  //     </HeaderRow>
  //   )}
  // />
);

export default HeaderCheckMarkCellExample;
