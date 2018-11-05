import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, {
  Item,
  Section,
  Subsection,
  Utils,
} from 'terra-list/lib/List';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import mockData from './mock-data/mock-section-sub';

const createListItem = itemData => (
  <Item key={itemData.key} isDivided>
    <Placeholder title={itemData.title} style={{ height: '50px' }} />
  </Item>
);

const createSubsection = subsectionData => (
  <Subsection
    key={subsectionData.key}
    title={subsectionData.title}
  >
    {subsectionData.childItems.map(childItem => createListItem(childItem))}
  </Subsection>
);

class SectionWithSubsection1 extends React.Component {
  constructor(props) {
    super(props);
    this.createSection = this.createSection.bind(this);
    this.createSections = this.createSections.bind(this);
    this.handleSectionSelection = this.handleSectionSelection.bind(this);
    this.state = { collapsedKeys: [] };
  }

  handleSectionSelection(event, metaData) {
    event.preventDefault();

    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));
  }

  createSection(sectionData) {
    return (
      <Section
        key={sectionData.key}
        title={sectionData.title}
        isCollapsed={this.state.collapsedKeys.indexOf(sectionData.key) >= 0}
        isCollapsible
        metaData={{ key: sectionData.key }}
        onSelect={this.handleSectionSelection}
      >
        {sectionData.childItems.map(childItem => createSubsection(childItem))}
      </Section>
    );
  }

  createSections(data) {
    return data.map(section => this.createSection(section));
  }

  render() {
    return (
      <List>
        {this.createSections(mockData)}
      </List>
    );
  }
}

export default SectionWithSubsection1;
