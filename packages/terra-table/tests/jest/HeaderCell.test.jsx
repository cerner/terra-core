import React from 'react';
import HeaderCell from '../../src/HeaderCell';

// Snapshot test
it('should render a default cell', () => {
  const shallowComponent = shallow(<HeaderCell />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a cell with content', () => {
  const shallowComponent = shallow(<HeaderCell>Content</HeaderCell>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a cell with width static', () => {
  const shallowComponent = shallow(
    <HeaderCell width={{
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
    <HeaderCell width={{ percentage: 20 }} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a cell with width scalar', () => {
  const shallowComponent = shallow(
    <HeaderCell width={{ scalar: 2 }} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a cell with padding', () => {
  const shallowComponent = shallow(
    <HeaderCell isPadded />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a header cell with refCallback', () => {
  const shallowComponent = shallow(
    <HeaderCell refCallback={jest.fn()} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});
