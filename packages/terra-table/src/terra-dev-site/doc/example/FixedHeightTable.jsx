import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, {
  HeaderRow, HeaderCell, Row, Cell,
} from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import FixedHeight from '../common/FixedHeight';

const FixedHeightTable = () => (
  <FixedHeight>
    <Table
      fill
      paddingStyle="standard"
      headerData={{
        cells: [
          {
            children: ['Name'],
          },
          {
            children: ['Address'],
          },
          {
            children: ['Phone Number'],
          },
        ],
      }}
      sectionData={[
        {
          rows: [
            {
              key: 'row-0',
              cells: [
                {
                  key: 'cell-0',
                  children: [
                    'John Smith',
                  ],
                },
                {
                  key: 'cell-1',
                  children: [
                    '123 Adams Drive',
                  ],
                },
                {
                  key: 'cell-2',
                  children: [
                    '111-222-3333',
                  ],
                },
              ],
            },
            {
              key: 'row-1',
              isStriped: true,
              cells: [
                {
                  key: 'cell-0',
                  children: [
                    'Jane Smith',
                  ],
                },
                {
                  key: 'cell-1',
                  children: [
                    '321 Drive Street',
                  ],
                },
                {
                  key: 'cell-2',
                  children: [
                    '111-222-3333',
                  ],
                },
              ],
            },
            {
              key: 'row-2',
              cells: [
                {
                  key: 'cell-0',
                  children: [
                    'Dave Smith',
                  ],
                },
                {
                  key: 'cell-1',
                  children: [
                    '213 Raymond Road',
                  ],
                },
                {
                  key: 'cell-2',
                  children: [
                    '111-222-3333',
                  ],
                },
              ],
            },
            {
              key: 'row-3',
              isStriped: true,
              cells: [
                {
                  key: 'cell-0',
                  children: [
                    'Bob Smith',
                  ],
                },
                {
                  key: 'cell-1',
                  children: [
                    '123 Adams Drive',
                  ],
                },
                {
                  key: 'cell-2',
                  children: [
                    '111-222-3333',
                  ],
                },
              ],
            },
            {
              key: 'row-4',
              cells: [
                {
                  key: 'cell-0',
                  children: [
                    'Wallaby Smith',
                  ],
                },
                {
                  key: 'cell-1',
                  children: [
                    '321 Drive Street',
                  ],
                },
                {
                  key: 'cell-2',
                  children: [
                    '111-222-3333',
                  ],
                },
              ],
            },
            {
              key: 'row-5',
              isStriped: true,
              cells: [
                {
                  key: 'cell-0',
                  children: [
                    'Potato Smith',
                  ],
                },
                {
                  key: 'cell-1',
                  children: [
                    '213 Raymond Road',
                  ],
                },
                {
                  key: 'cell-2',
                  children: [
                    '111-222-3333',
                  ],
                },
              ],
            },
            {
              key: 'row-6',
              cells: [
                {
                  key: 'cell-0',
                  children: [
                    'Dolphin Smith',
                  ],
                },
                {
                  key: 'cell-1',
                  children: [
                    '123 Adams Drive',
                  ],
                },
                {
                  key: 'cell-2',
                  children: [
                    '111-222-3333',
                  ],
                },
              ],
            },
            {
              key: 'row-7',
              isStriped: true,
              cells: [
                {
                  key: 'cell-0',
                  children: [
                    'Orc Smith',
                  ],
                },
                {
                  key: 'cell-1',
                  children: [
                    '321 Drive Street',
                  ],
                },
                {
                  key: 'cell-2',
                  children: [
                    '111-222-3333',
                  ],
                },
              ],
            },
            {
              key: 'row-8',
              cells: [
                {
                  key: 'cell-0',
                  children: [
                    'Lava Smith',
                  ],
                },
                {
                  key: 'cell-1',
                  children: [
                    '213 Raymond Road',
                  ],
                },
                {
                  key: 'cell-2',
                  children: [
                    '111-222-3333',
                  ],
                },
              ],
            },
          ],
        }
      ]}
    />
  </FixedHeight>
);

export default FixedHeightTable;
