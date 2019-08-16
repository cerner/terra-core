import React from 'react';
import List, { Item, Section, Utils } from 'terra-list';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import classNames from 'classnames/bind';
import mockData from './mock-data/mock-section';
import styles from '../example/ListDocCommon.module.scss';

const cx = classNames.bind(styles);

const createListItem = itemData => (
  <Item key={itemData.key}>
    <Placeholder title={itemData.title} className={cx('placeholder')} />
  </Item>
);

class SectionList extends React.Component {
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
        {sectionData.childItems.map(childItem => createListItem(childItem))}
      </Section>
    );
  }

  createSections(data) {
    return data.map(section => this.createSection(section));
  }

  render() {
    return (
      <List role="listbox">
        {this.createSections(mockData)}
      </List>
    );
  }
}

export default SectionList;
