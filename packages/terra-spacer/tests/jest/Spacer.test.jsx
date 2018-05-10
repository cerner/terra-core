import React from 'react';
import Spacer from '../../src/Spacer';

describe('Spacer', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = render(<Spacer><div>Test Component</div></Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should render a spacer component with small top margin', () => {
    const wrapper = render(<Spacer marginTop="small"><p>Test</p></Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spacer component with medium bottom margin', () => {
    const wrapper = render(<Spacer marginBottom="medium"><p>Test</p></Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spacer component with large left padding', () => {
    const wrapper = render(<Spacer paddingLeft="large"><p>Test</p></Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spacer component with inline-block display', () => {
    const wrapper = render(<Spacer isInlineBlock><p>Test</p></Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spacer component with large vertical and small horizontal margin', () => {
    const wrapper = render(<Spacer margin="large small"><p>Test</p></Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spacer component with all margin props set to the given values', () => {
    const wrapper =
    render(
      <Spacer marginTop="small" marginBottom="small-1" marginLeft="small-2" marginRight="medium">
        <p>Test</p>
      </Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spacer component with all padding props set to the given values', () => {
    const wrapper =
    render(
      <Spacer paddingTop="large+1" paddingBottom="large+2" paddingLeft="large+3" paddingRight="large+4">
        <p>Test</p>
      </Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  // Custom Prop Test
  it('it should pass in a custom prop', () => {
    const wrapper = render(<Spacer className="spacer"><p>Test</p></Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  // Shorthand Mapping Tests
  it('should render a spacer component with top, right, bottom, and left margin set to large', () => {
    const wrapper = render(<Spacer margin="large"><p>Test</p></Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spacer component with vertical margin set to large and horizontal margin set to small', () => {
    const wrapper = render(<Spacer margin="large small"><p>Test</p></Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spacer component with vertical top margin set to large, horizontal margin set to medium, and bottom margin set to small', () => {
    const wrapper = render(<Spacer margin="large medium small"><p>Test</p></Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spacer component with vertical top margin set to large, right margin set to medium, bottom margin set to small, and left margin set to small-1 ', () => {
    const wrapper = render(<Spacer margin="large medium small small-1"><p>Test</p></Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spacer component with top, right, bottom, and left padding set to large', () => {
    const wrapper = render(<Spacer padding="large"><p>Test</p></Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spacer component with vertical padding set to large and horizontal padding set to small', () => {
    const wrapper = render(<Spacer padding="large small"><p>Test</p></Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spacer component with vertical top padding set to large, horizontal padding set to medium, and bottom padding set to small', () => {
    const wrapper = render(<Spacer padding="large medium small"><p>Test</p></Spacer>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spacer component with vertical top padding set to large, right padding set to medium, bottom padding set to small, and left padding set to small-1 ', () => {
    const wrapper = render(<Spacer padding="large medium small small-1"><p>Test</p></Spacer>);
    expect(wrapper).toMatchSnapshot();
  });
});
