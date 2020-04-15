import React from 'react';
import Table from 'terra-table';
import classNames from 'classnames/bind';
import styles from './TableStylesCommon.modules.scss';

const cx = classNames.bind(styles);

const CustomCell = () => (
  <Table
    summaryId="example-table"
    summary="Custom Cell Content"
    dividerStyle="both"
    numberOfColumns={3}
    rowStyle="disclose"
    headerData={{
      cells: [
        {
          id: 'header-name',
          key: 'name0',
          children: 'Column 0',
        },
        {
          id: 'header-name',
          key: 'name1',
          children: 'Column 1',
        },
        {
          id: 'header-name',
          key: 'name2',
          children: 'Column 2',
        },
      ],
    }}
    bodyData={[
      {
        rows: [
          {
            key: 'row-0',
            cells: [
              {
                key: 'cell-0',
                children: <div className={cx('truncation')}>Normal Content. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed sunt tempora magnam vitae atque nostrum sequi quibusdam veniam deserunt, non itaque tenetur, temporibus repellat repellendus. Commodi non repellat nihil molestiae!</div>,
              },
              {
                key: 'cell-1',
                children: <div className={cx('truncation')}>Content with Disclose Action. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed sunt tempora magnam vitae atque nostrum sequi quibusdam veniam deserunt, non itaque tenetur, temporibus repellat repellendus. Commodi non repellat nihil molestiae!</div>,
              },
              {
                key: 'cell-2',
                children: <div className={cx('truncation')}>Content with removeInner. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed sunt tempora magnam vitae atque nostrum sequi quibusdam veniam deserunt, non itaque tenetur, temporibus repellat repellendus. Commodi non repellat nihil molestiae!</div>,
                removeInner: true,
              },
            ],
            discloseAction: {
              discloseLabel: 'Disclose Label',
              discloseCellIndex: 1,
              isDisclosed: false,
            },
          },
          {
            key: 'row-1',
            cells: [
              {
                key: 'cell-0',
                children: <div className={cx('truncation')}>Normal Content. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed sunt tempora magnam vitae atque nostrum sequi quibusdam veniam deserunt, non itaque tenetur, temporibus repellat repellendus. Commodi non repellat nihil molestiae!</div>,
              },
              {
                key: 'cell-1',
                children: <div className={cx('truncation')}>Content with Disclose and removeInner. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed sunt tempora magnam vitae atque nostrum sequi quibusdam veniam deserunt, non itaque tenetur, temporibus repellat repellendus. Commodi non repellat nihil molestiae!</div>,
                removeInner: true,
              },
              {
                key: 'cell-2',
                children: <div className={cx('truncation')}>Content with removeInner. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed sunt tempora magnam vitae atque nostrum sequi quibusdam veniam deserunt, non itaque tenetur, temporibus repellat repellendus. Commodi non repellat nihil molestiae!</div>,
                removeInner: true,
              },
            ],
            discloseAction: {
              discloseLabel: 'Disclose Label',
              discloseCellIndex: 1,
              isDisclosed: false,
            },
          },
        ],
      },
    ]}
  />
);

export default CustomCell;
