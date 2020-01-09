import React, {
  useState,
} from 'react';
import Table, {
  Utils,
} from 'terra-table';
import mockData from './mock-data/mock-section';

const createCell = cell => ({ key: cell.key, children: [cell.title] });

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const SectionTable = () => {
  const [collapsedKeys, setCollapsedKeys] = useState([]);

  const handleSectionToggle = (event, metaData) => {
    event.preventDefault();
    setCollapsedKeys(Utils.toggleArrayValue(collapsedKeys, metaData.key));
  };

  const createRow = rowData => (
    {
      key: rowData.key,
      cells: createCellsForRow(rowData.cells),
    }
  );

  const createSection = sectionData => (
    {
      sectionHeader: {
        id: `sub-${sectionData.key}`,
        key: sectionData.key,
        title: sectionData.title,
        onToggle: handleSectionToggle,
        metaData: { key: sectionData.key },
        isCollapsed: collapsedKeys.indexOf(sectionData.key) >= 0,
      },
      rows: sectionData.childItems.map(childItem => createRow(childItem)),
    }
  );

  return (
    <Table
      summaryId="example-sorted-table"
      summary="This table shows an implementation of sections."
      numberOfColumns={3}
      cellPaddingStyle="standard"
      headerData={{
        cells: [
          { key: 'cell-0', id: 'toggle-0', children: 'Column 0' },
          { key: 'cell-1', id: 'toggle-1', children: 'Column 1' },
          { key: 'cell-2', id: 'toggle-2', children: 'Column 2' },
        ],
      }}
      bodyData={mockData.map(section => createSection(section))}
    />
  );
};

export default SectionTable;
