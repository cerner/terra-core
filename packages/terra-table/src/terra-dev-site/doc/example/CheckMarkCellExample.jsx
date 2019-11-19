import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const CheckMarkCellExample = () => (
  <React.Fragment>
    <Table
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
      rowStyle="selection"
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
      rowStyle="selection"
      checkStyle="selection"
      headerData={{
        cells: [{
          children: [
            'test'
          ],
        }],
      }}
    />
    <Table
      rowStyle="disclosure"
      checkStyle="none"
      headerData={{
        cells: [{
          children: [
            'test'
          ],
        }],
      }}
    />
  </React.Fragment>
  //   <Row>
  //     <CheckMarkCell />
  //     <CheckMarkCell isSelectable alignmentPadding={2} />
  //     <CheckMarkCell isSelected />
  //     <CheckMarkCell isSelected isDisabled />
  //     <CheckMarkCell isSelectable />
  //     <CheckMarkCell isSelectable isSelected />
  //     <CheckMarkCell isSelectable isDisabled />
  //     <CheckMarkCell isSelectable isSelected isDisabled />
  //   </Row>
  // </Table>
);

export default CheckMarkCellExample;
