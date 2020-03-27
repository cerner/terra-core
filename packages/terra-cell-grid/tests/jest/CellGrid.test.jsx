import React from 'react';
import CellGrid from '../../src/CellGrid';
import Cell from '../../src/Cell';

// Snapshot test
it('should render a default cell grid', () => {
  const shallowComponent = shallow(<CellGrid><Cell /></CellGrid>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a vertical divider cell grid', () => {
  const shallowComponent = shallow(<CellGrid dividerStyle="vertical"><Cell /></CellGrid>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a horizontal divider cell grid', () => {
  const shallowComponent = shallow(<CellGrid dividerStyle="horizontal"><Cell /></CellGrid>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a both divider cell grid', () => {
  const shallowComponent = shallow(<CellGrid dividerStyle="both"><Cell /></CellGrid>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a cell grid with refCallback', () => {
  const shallowComponent = shallow(
    <CellGrid refCallback={jest.fn()}><Cell /></CellGrid>,
  );
  expect(shallowComponent).toMatchSnapshot();
});
