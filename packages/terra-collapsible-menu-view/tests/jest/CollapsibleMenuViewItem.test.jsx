import React from 'react';
import IconTrash from 'terra-icon/lib/icon/IconTrash';
import CollapsibleMenuViewItem from '../../src/CollapsibleMenuViewItem';
import intlContexts from './intl-context-setup';

describe('CollapsibleMenuViewItem', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(<CollapsibleMenuViewItem text="Testing" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  // Props
  it('should merge custom props', () => {
    const wrapper = shallow(<CollapsibleMenuViewItem text="Testing" className="Testing" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not set isSelected on button outside of an item group', () => {
    const wrapper = shallow(<CollapsibleMenuViewItem text="Testing" isSelected />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a button group button when in an item group', () => {
    const context = { isCollapsibleGroupItem: true };
    const wrapper = shallow(<CollapsibleMenuViewItem text="Testing" />, { context });
    expect(wrapper).toMatchSnapshot();
  });

  it('should set isSelected on button that is inside item group', () => {
    const context = { isCollapsibleGroupItem: true };
    const wrapper = shallow(<CollapsibleMenuViewItem text="Testing" isSelected />, { context });
    expect(wrapper).toMatchSnapshot();
  });

  it('should set icon prop on button', () => {
    const wrapper = shallow(<CollapsibleMenuViewItem text="Testing" icon={<IconTrash />} />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set isReversed prop on button', () => {
    const wrapper = shallow(<CollapsibleMenuViewItem text="Testing" icon={<IconTrash />} isReversed />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a button with icon and text when isIconOnly and text is set', () => {
    const wrapper = shallow(<CollapsibleMenuViewItem text="Testing" icon={<IconTrash />} isIconOnly />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a menu when subMenuItems are given', () => {
    const wrapper = shallow(<CollapsibleMenuViewItem text="Testing" subMenuItems={[<CollapsibleMenuViewItem text="Menu Item" key="1" />]} />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled button when isDisabled is set', () => {
    const wrapper = shallow(<CollapsibleMenuViewItem text="Testing" isDisabled />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled button group button that is inside a button group when isDisabled is set', () => {
    const context = { isCollapsibleGroupItem: true };
    const wrapper = shallow(<CollapsibleMenuViewItem text="Testing" isDisabled />, { context });
    expect(wrapper).toMatchSnapshot();
  });

  describe('Collapsible Menu Context', () => {
    it('should render a menu item', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallow(<CollapsibleMenuViewItem text="Testing" />, { context });
      expect(wrapper).toMatchSnapshot();
    });

    it('should not set selected prop on menu item outside of item group', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallow(<CollapsibleMenuViewItem text="Testing" isSelected />, { context });
      expect(wrapper).toMatchSnapshot();
    });

    it('should set selected prop on menu item when inside item group', () => {
      const context = { isCollapsibleMenuItem: true, isCollapsibleGroupItem: true };
      const wrapper = shallow(<CollapsibleMenuViewItem text="Testing" isSelected />, { context });
      expect(wrapper).toMatchSnapshot();
    });

    it('should not set icon prop menu item, but should render text', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallow(<CollapsibleMenuViewItem text="Testing" icon={<IconTrash />} />, { context });
      expect(wrapper).toMatchSnapshot();
    });

    it('should not set isReversed prop on menu item', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallow(<CollapsibleMenuViewItem text="Testing" icon={<IconTrash />} isReversed />, { context });
      expect(wrapper).toMatchSnapshot();
    });

    it('should not set icon on menu item when isIconOnly is set, but should set the text', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallow(<CollapsibleMenuViewItem text="Testing" icon={<IconTrash />} isIconOnly />, { context });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a menu item when subMenuItems are given', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallow(
        (
          <CollapsibleMenuViewItem
            text="Testing"
            subMenuItems={[<CollapsibleMenuViewItem text="Menu Item" key="1" />]}
          />
        ), { context },
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a disabled menu item when isDisabled is set', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallow(<CollapsibleMenuViewItem text="Testing" isDisabled />, { context });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
