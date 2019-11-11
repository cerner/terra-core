import React, {
  useState,
} from 'react';
import Table, {
  Row,
  Cell,
  Section,
  HeaderRow,
  HeaderCell,
  Utils,
} from 'terra-table'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-section';

const arId = ['sub1' , 'sub2'];
const headId = ['header1' , 'header2', 'header3'];

const createCell = (cell, sectionIndex, colIndex) => <Cell headers={`${arId[sectionIndex]} ${headId[colIndex]}`} key={cell.key}>{cell.title}</Cell>;

const createCellsForRow = (cells, sectionIndex) => cells.map((cell, colIndex) => createCell(cell, sectionIndex, colIndex));

const SectionTable = () => {
  const [collapsedKeys, setCollapsedKeys] = useState([]);
  let rowCount = 1;

  const handleSectionSelection = (event, metaData) => {
    event.preventDefault();
    setCollapsedKeys(Utils.updatedMultiSelectedKeys(collapsedKeys, metaData.key));
  };

  const createRow = (rowData, sectionIndex) => {
    rowCount += 1;
    return (
      <Row
        key={rowData.key}
        aria-rowindex={rowCount}
      >
        {createCellsForRow(rowData.cells, sectionIndex)}
      </Row>
    );
  };

  const createSection = (sectionData, sectionIndex) => {
    rowCount += 1;
    return (
      <Section
        id={arId[sectionIndex]}
        key={sectionData.key}
        aria-rowindex={rowCount}
        title={sectionData.title}
        isCollapsed={collapsedKeys.indexOf(sectionData.key) >= 0}
        isCollapsible
        metaData={{ key: sectionData.key }}
        onSelect={handleSectionSelection}
      >
        {sectionData.childItems.map(childItem => createRow(childItem, sectionIndex))}
      </Section>
    );
  };

  const sections = mockData.map((section, index) => createSection(section, index));

  return (
    <Table
      aria-rowcount={rowCount}
      paddingStyle="standard"
      headerRow={(
        <HeaderRow aria-rowindex="1">
          <HeaderCell id={headId[0]} key="cell-1">Column derp</HeaderCell>
          <HeaderCell id={headId[1]} key="cell-2">Column flerp</HeaderCell>
          <HeaderCell id={headId[2]} key="cell-3">Column blerp</HeaderCell>
        </HeaderRow>
      )}
    >
      {sections}
    </Table>
  );
};

export default SectionTable;
