import React from 'react';
import Cell from '../../../src/subcomponents/Cell';

describe('Cell', () => {
  // Snapshot Tests
  it('should render a Cell', () => {
    const shallowComponent = shallow(<Cell />);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Cell with child content', () => {
    const shallowComponent = shallow(<Cell>test text</Cell>);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Cell with child content and remove inner', () => {
    const shallowComponent = shallow(<Cell removeInner>test text</Cell>);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Cell with disclosure label', () => {
    const shallowComponent = shallow(<Cell disclosure={{ label: 'test link label' }} />);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Cell with disclosure label and isCurrent', () => {
    const shallowComponent = shallow(<Cell disclosure={{ label: 'test link label', isCurrent: true }} />);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with callback functions', () => {
    const shallowComponent = shallow(<Cell refCallback={jest.fn()} />);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Cell with width inner container removed', () => {
    const shallowComponent = shallow(<Cell removeInner />);
    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render a Cell with width set', () => {
    const shallowComponent = shallow(<Cell width={{ scalar: 2 }} />);
    expect(shallowComponent).toMatchSnapshot();
  });
});
