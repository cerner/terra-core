import React from 'react';
import Cell from '../../src/Cell';

// Snapshot test
it('should render a default cell', () => {
  const shallowComponent = shallow(<Cell />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a cell with content', () => {
  const shallowComponent = shallow(<Cell>Content</Cell>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a cell with width static', () => {
  const shallowComponent = shallow(
    <Cell width={{
      static: {
        value: 40,
        unit: 'rem',
      },
    }}
    />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a cell with width percentage', () => {
  const shallowComponent = shallow(
    <Cell width={{ percentage: 20 }} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a cell with width scalar', () => {
  const shallowComponent = shallow(
    <Cell width={{ scalar: 2 }} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a table cell with refCallback', () => {
  const shallowComponent = shallow(
    <Cell refCallback={jest.fn()} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});
