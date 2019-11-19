import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const CheckMarkCellExample = () => (
  <React.Fragment>
    <Table
      rowStyle="disclose"
      checkStyle="toggle"
      sectionData={[
        {
          rows: [
            {
              cells: [{
                children: [
                  'test'
                ],
              }],
            },
          ],
        }
      ]}
    />
    <Table
      rowStyle="toggle"
      checkStyle="readOnly"
      sectionData={[
        {
          rows: [
            {
              cells: [{
                children: [
                  'test'
                ],
              }],
            },
          ],
        }
      ]}
    />
    <Table
      rowStyle="disclose"
      checkStyle="toggle"
      sectionData={[
        {
          rows: [
            {
              isToggled: true,
              cells: [{
                children: [
                  'test'
                ],
              }],
            },
          ],
        }
      ]}
    />
    <Table
      rowStyle="toggle"
      checkStyle="readOnly"
      sectionData={[
        {
          rows: [
            {
              isToggled: true,
              cells: [{
                children: [
                  'test'
                ],
              }],
            },
          ],
        }
      ]}
    />
    <Table
      rowStyle="disclose"
      checkStyle="toggle"
      sectionData={[
        {
          rows: [
            {
              isDisabled: true,
              isToggled: true,
              cells: [{
                children: [
                  'test'
                ],
              }],
            },
          ],
        }
      ]}
    />
    <Table
      rowStyle="toggle"
      checkStyle="readOnly"
      sectionData={[
        {
          rows: [
            {
              isDisabled: true,
              isToggled: true,
              cells: [{
                children: [
                  'test'
                ],
              }],
            },
          ],
        }
      ]}
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
