import React from 'react';
import Table, {
  Row,
  Cell,
  Section,
  Subsection,
  HeaderCell,
  Utils,
} from 'terra-flex-table/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\
import Placeholder from 'terra-doc-template/lib/Placeholder';
import mockData from './mock-data/mock-section-sub';

const widths = [
  { static: { value: 60, unit: 'px' } },
  { static: { value: 60, unit: 'px' } },
  { static: { value: 60, unit: 'px' } },
];

const createCell = (cell, index) => (
  <Cell key={cell.key} width={widths[index]}>
    <Placeholder title={cell.title} style={{ height: '50px', padding: '0' }} />
  </Cell>
);

const createCellsForRow = cells => cells.map((cell, index) => createCell(cell, index));


const createRow = itemData => (
  <Row key={itemData.key}>
    {createCellsForRow(itemData.cells)}
  </Row>
);

class SectionWithSubsection2 extends React.Component {
  constructor(props) {
    super(props);
    this.createSection = this.createSection.bind(this);
    this.createSections = this.createSections.bind(this);
    this.createSubsection = this.createSubsection.bind(this);
    this.handleSectionSelection = this.handleSectionSelection.bind(this);
    this.state = { collapsedKeys: [] };
  }

  handleSectionSelection(event, metaData) {
    event.preventDefault();
    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));
  }

  createSubsection(subsectionData) {
    return (
      <Subsection
        key={subsectionData.key}
        title={subsectionData.title}
        isCollapsed={this.state.collapsedKeys.indexOf(subsectionData.key) >= 0}
        isCollapsible
        metaData={{ key: subsectionData.key }}
        onSelect={this.handleSectionSelection}
      >
        {subsectionData.childItems.map(childItem => createRow(childItem))}
      </Subsection>
    );
  }

  createSection(sectionData) {
    return (
      <Section
        key={sectionData.key}
        title={sectionData.title}
      >
        {sectionData.childItems.map(childItem => this.createSubsection(childItem))}
      </Section>
    );
  }

  createSections(data) {
    return data.map(section => this.createSection(section));
  }

  render() {
    return (
      <Table
        paddingStyle="standard"
        headerCells={[
          <HeaderCell key="cell-0" width={widths[0]}>Fixed 0</HeaderCell>,
          <HeaderCell key="cell-1" width={widths[1]}>Fixed 1</HeaderCell>,
          <HeaderCell key="cell-2" width={widths[2]}>Fixed 2</HeaderCell>,
        ]}
      >
        {this.createSections(mockData)}
      </Table>
    );
  }
}

export default SectionWithSubsection2;
