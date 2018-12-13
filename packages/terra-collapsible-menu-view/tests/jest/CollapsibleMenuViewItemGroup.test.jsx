import React from 'react';
import CollapsibleMenuViewItemGroup from '../../src/CollapsibleMenuViewItemGroup';
import CollapsibleMenuViewItem from '../../src/CollapsibleMenuViewItem';
import intlContexts from './intl-context-setup';

describe('CollapsibleMenuViewItemGroup', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(
      (
        <CollapsibleMenuViewItemGroup>
          <CollapsibleMenuViewItem text="Testing" />
          <CollapsibleMenuViewItem text="Testing" />
        </CollapsibleMenuViewItemGroup>
      ), intlContexts.shallowContext,
    );
    expect(wrapper).toMatchSnapshot();
  });

  // Props
  it('should merge custom props', () => {
    const wrapper = shallow(
      (
        <CollapsibleMenuViewItemGroup className="Testing">
          <CollapsibleMenuViewItem text="Testing" />
          <CollapsibleMenuViewItem text="Testing" />
        </CollapsibleMenuViewItemGroup>
      ), intlContexts.shallowContext,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a selectable button group', () => {
    const wrapper = shallow(
      (
        <CollapsibleMenuViewItemGroup selectedKeys={['key1']}>
          <CollapsibleMenuViewItem text="Testing" key="key1" />
          <CollapsibleMenuViewItem text="Testing" key="key2" />
        </CollapsibleMenuViewItemGroup>
      ), intlContexts.shallowContext,
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('Collapsible Menu Context', () => {
    it('should render a menu item group when selectable', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallow(
        (
          <CollapsibleMenuViewItemGroup selectedKeys={['key1']}>
            <CollapsibleMenuViewItem text="Testing" key="key1" />
            <CollapsibleMenuViewItem text="Testing" key="key2" />
          </CollapsibleMenuViewItemGroup>
        ), { context },
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('should merge custom props', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallow(
        (
          <CollapsibleMenuViewItemGroup className="Testing">
            <CollapsibleMenuViewItem text="Testing" />
            <CollapsibleMenuViewItem text="Testing" />
          </CollapsibleMenuViewItemGroup>
        ), { context },
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('should merge custom props when selectable', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallow(
        (
          <CollapsibleMenuViewItemGroup className="Testing" selectedKeys={['key1']}>
            <CollapsibleMenuViewItem text="Testing" key="key1" />
            <CollapsibleMenuViewItem text="Testing" key="key2" />
          </CollapsibleMenuViewItemGroup>
        ), { context },
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('should render menu items when selectedKeys is not set', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallow(
        (
          <CollapsibleMenuViewItemGroup>
            <CollapsibleMenuViewItem text="Testing" />
            <CollapsibleMenuViewItem text="Testing" />
          </CollapsibleMenuViewItemGroup>
        ), { context },
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
