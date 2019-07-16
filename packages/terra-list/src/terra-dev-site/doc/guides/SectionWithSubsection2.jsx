import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
import List, {
  Item,
  Section,
  Subsection,
  Utils,
} from 'terra-list/lib/index';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved */
import Placeholder from 'terra-doc-template/lib/Placeholder';
import classNames from 'classnames/bind';
import mockData from './mock-data/mock-section-sub';
import styles from '../example/ListDocCommon.module.scss';

const cx = classNames.bind(styles);

const createListItem = itemData => (
  <Item key={itemData.key}>
    <Placeholder title={itemData.title} className={cx('placeholder')} />
  </Item>
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
    const isCollapsed = this.state.collapsedKeys.indexOf(subsectionData.key) >= 0;
    return (
      <Subsection
        key={subsectionData.key}
        title={subsectionData.title}
        isCollapsed={isCollapsed}
        isCollapsible
        metaData={{ key: subsectionData.key }}
        onSelect={this.handleSectionSelection}
      >
        {!isCollapsed && subsectionData.childItems.map(childItem => createListItem(childItem))}
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
      <List dividerStyle="standard">
        {this.createSections(mockData)}
      </List>
    );
  }
}

export default SectionWithSubsection2;
