import React from 'react';
import Spacer from '../../src/Spacer';

describe('Spacer', () => {
  const defaultRender = <Spacer />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render a spacer component with small top margin', () => {
    const wrapper = shallow(<Spacer marginTop="small">Test</Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spacer component with medium bottom margin', () => {
    const wrapper = shallow(<Spacer marginBottom="medium">Test</Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spacer component with large left padding', () => {
    const wrapper = shallow(<Spacer paddingLeft="large">Test</Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spacer component with inline-block display', () => {
    const wrapper = shallow(<Spacer isInlineBlock>Test</Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spacer component with right padding set to the given value at the given viewport size', () => {
    const wrapper = shallow(<Spacer bps={{ 768: { paddingRight: 'large+3' } }}>Test</Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spacer component with all margin props set to the given values', () => {
    const wrapper =
    shallow(
      <Spacer marginTop="small" marginBottom="small-1" marginLeft="small-2" marginRight="medium">
        Test
      </Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spacer component with all padding props set to the given values', () => {
    const wrapper =
    shallow(
      <Spacer paddingTop="large+1" paddingBottom="large+2" paddingLeft="large+3" paddingRight="large+4">
        Test
      </Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  // Custom Prop Test
  it('it should pass in a custom prop', () => {
    const wrapper = shallow(<Spacer className="spacer">Test</Spacer>);
    expect(wrapper).toMatchSnapshot();
  });
});
