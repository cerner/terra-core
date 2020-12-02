import React from 'react';
import List, {
  Item,
  Section,
  Subsection,
  Utils,
} from 'terra-list';

import { Placeholder } from '@cerner/terra-docs';
import classNames from 'classnames/bind';
import mockData from './mock-data/mock-section-sub';
import styles from '../example/ListDocCommon.module.scss';

const cx = classNames.bind(styles);

const createListItem = itemData => (
  <Item key={itemData.key}>
    <Placeholder title={itemData.title} className={cx('placeholder')} />
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
    const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;
    return (
      <Section
        key={sectionData.key}
        title={sectionData.title}
        isCollapsed={isCollapsed}
        isCollapsible
        metaData={{ key: sectionData.key }}
        onSelect={this.handleSectionSelection}
      >
        {!isCollapsed && sectionData.childItems.map(childItem => createSubsection(childItem))}
      </Section>
    );
  }

  createSections(data) {
    return data.map(section => this.createSection(section));
  }

  render() {
    return (
      <List dividerStyle="standard">
        {this.createSections(mockData)}
      </List>
    );
  }
}

export default SectionWithSubsection1;
