import React from 'react';
import Pane from '../../src/TabPane';


describe('TabPane', () => {
  it('should render a default component with label', () => {
    const wrapper = shallow(<Pane label="Default" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with icon and label', () => {
    const wrapper = shallow(<Pane label="Label" icon={<div>Fake icon</div>} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with icon only when indicated', () => {
    const wrapper = shallow(<Pane label="Label" icon={<div>Fake icon</div>} isIconOnly />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as disabled when indicated', () => {
    const wrapper = shallow(<Pane label="Label" isDisabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a custom display when provided', () => {
    const wrapper = shallow(<Pane label="Label" customDisplay={<div>Custom Display</div>} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with custom props', () => {
    const wrapper = shallow(<Pane label="Default" className="customClass" />);
    expect(wrapper).toMatchSnapshot();
  });
});
