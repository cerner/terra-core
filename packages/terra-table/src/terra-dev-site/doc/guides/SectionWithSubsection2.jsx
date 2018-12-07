import React from 'react';
import Table, {
  Row,
  Cell,
  Section,
  Subsection,
  Header,
  HeaderCell,
  Utils,
} from 'terra-table/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions\
import Placeholder from 'terra-doc-template/lib/Placeholder';
import mockData from './mock-data/mock-section-sub';

const createCell = cell => (
  <Cell key={cell.key}>
    <Placeholder title={cell.title} style={{ height: '50px' }} />
  </Cell>
);

const createCellsForRow = cells => cells.map(cell => createCell(cell));

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
        colSpan={3}
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
        colSpan={3}
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
        header={
          <Header>
            <HeaderCell>Column 0</HeaderCell>
            <HeaderCell>Column 1</HeaderCell>
            <HeaderCell>Column 2</HeaderCell>
          </Header> 
        }
      >
        {this.createSections(mockData)}
      </Table>
    );
  }
}

export default SectionWithSubsection2;
