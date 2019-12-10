import React from 'react';
import HeaderRow from '../../../src/subcomponents/_HeaderRow';

describe('HeaderRow', () => {
  // Snapshot Tests
  it('should render a HeaderRow', () => {
    const shallowComponent = shallow(<HeaderRow />);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a HeaderRow with child content', () => {
    const shallowComponent = shallow(<HeaderRow>test text</HeaderRow>);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with callback functions', () => {
    const shallowComponent = shallow(<HeaderRow refCallback={jest.fn()} />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
