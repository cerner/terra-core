import React from 'react';

import OutlineTableView from '../../src/Table';

describe('OutlineTableView', () => {
  // Snapshot Tests
  it('should pass through props to Table', () => {
    const shallowComponent = shallow(
      <OutlineTableView
        bodyData={[
          {
            rows: [
              {
                key: 'row-0',
                cells: [
                  { key: 'cell-0', children: 'John Smith' },
                  { key: 'cell-1', children: '123 Adams Drive' },
                  { key: 'cell-2', children: '111-222-3333' },
                ],
              },
            ],
          },
        ]}
        className='test'
        columnWidths={[
          { static: { value: 10, unit: 'px' } },
        ]}
        fill
        footerNode={<p>zxcv</p>}
        headerData={{
          cells: [
            { id: 'header-name', key: 'name', children: 'Name' },
            { id: 'header-address', key: 'address', children: 'Address' },
            { id: 'header-phone_number', key: 'phone_number', children: 'Phone Number' },
          ],
        }}
        numberOfColumns={3}
        numberOfRows={1}
        scrollRefCallback={jest.fn()}
        showSimpleFooter
        summary='This is a default table structure'
        summaryId='test-id'
      />,
    );
    expect(shallowComponent).toMatchSnapshot();
  });
});
