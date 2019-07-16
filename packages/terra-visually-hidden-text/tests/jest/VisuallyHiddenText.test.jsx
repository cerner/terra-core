import React from 'react';
import VisuallyHiddenText from '../../src/VisuallyHiddenText';

describe('VisuallyHiddenText', () => {
  const defaultRender = <VisuallyHiddenText text="This is screen reader only text" />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass in refCallback as the ref prop of the input element', () => {
    const refCallback = jest.fn();
    const wrapper = mount(<VisuallyHiddenText refCallback={refCallback} />);
    expect(refCallback).toBeCalled();
    expect(wrapper).toMatchSnapshot();
  });
});
