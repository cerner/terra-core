import React from 'react';
import CollapsibleMenuViewToggle from '../../src/CollapsibleMenuViewToggle';

describe('CollapsibleMenuViewToggle', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(<CollapsibleMenuViewToggle text="Testing" />);
    expect(wrapper).toMatchSnapshot();
  });

  // Props
  it('should merge custom props', () => {
    const wrapper = shallow(<CollapsibleMenuViewToggle text="Testing" className="Testing" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set isSelected prop', () => {
    const wrapper = shallow(<CollapsibleMenuViewToggle text="Testing" isSelected />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set isSelectable prop to false', () => {
    const wrapper = shallow(<CollapsibleMenuViewToggle text="Testing" isSelectable={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Collapsible Menu Context', () => {
    it('should render a selectable menu item', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallow(<CollapsibleMenuViewToggle text="Testing" />, { context });
      expect(wrapper).toMatchSnapshot();
    });
    it('should set selected prop on menu item', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallow(<CollapsibleMenuViewToggle text="Testing" isSelected />, { context });
      expect(wrapper).toMatchSnapshot();
    });
    it('should set defaultChecked to false', () => {
      const context = { isCollapsibleMenuItem: true };
      const wrapper = shallow(<CollapsibleMenuViewToggle text="Testing" isSelectable={false} />, { context });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
