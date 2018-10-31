import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, {
  Item,
  Section,
  Utils,
} from 'terra-list/lib/List';
import Placeholder from 'terra-doc-template/lib/Placeholder';

class ListSectionExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleSectionSelection = this.handleSectionSelection.bind(this);
    this.state = { collapsedKeys: [] };
  }

  handleSectionSelection(event, metaData) {
    event.preventDefault();

    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));
  }

  render() {
    return (
      <List>
        <Section
          key="static-section"
          title="Static Section"
        >
          <Item key="123">
            <Placeholder title="Item 0" style={{ height: '50px' }} />
          </Item>
          <Item key="124">
            <Placeholder title="Item 1" style={{ height: '50px' }} />
          </Item>
          <Item key="125">
            <Placeholder title="Item 2" style={{ height: '50px' }} />
          </Item>
        </Section>
        <Section
          key="collapsible-section"
          isCollapsed={this.state.collapsedKeys.indexOf('collapse') >= 0}
          isCollapsible
          metaData={{ key: 'collapse' }}
          title="Collapsible Section"
          onSelect={this.handleSectionSelection}
        >
          <Item key="223">
            <Placeholder title="Item 0" style={{ height: '50px' }} />
          </Item>
          <Item key="224">
            <Placeholder title="Item 1" style={{ height: '50px' }} />
          </Item>
          <Item key="225">
            <Placeholder title="Item 2" style={{ height: '50px' }} />
          </Item>
        </Section>
      </List>
    );
  }
}

export default ListSectionExample;
