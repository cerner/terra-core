import React from 'react';
import CellGrid from '../../src/CellGrid';
import Cell from '../../src/Cell';

// Snapshot test
it('should render a default cell grid', () => {
  const tableRow = shallow(<CellGrid />);
  expect(tableRow).toMatchSnapshot();
});

it('should render a cell grid with a cell', () => {
  const tableRow = shallow(<CellGrid><Cell /></CellGrid>);
  expect(tableRow).toMatchSnapshot();
});

it('should render a selectable cell grid', () => {
  const tableRow = shallow(<CellGrid isSelectable />);
  expect(tableRow).toMatchSnapshot();
});

it('should render a selected cell grid', () => {
  const tableRow = shallow(<CellGrid isSelectable isSelected />);
  expect(tableRow).toMatchSnapshot();
});

it('should render a striped cell grid', () => {
  const tableRow = shallow(<CellGrid isStriped />);
  expect(tableRow).toMatchSnapshot();
});

it('should render a cell grid with onSelect', () => {
  const mockCallBack = jest.fn();

  const section = shallow(
    <CellGrid isSelectable onSelect={mockCallBack} />,
  );
  expect(section).toMatchSnapshot();
  section.find('tr').simulate('click');
  section.find('tr').simulate('keydown', { nativeEvent: { keyCode: 13 } });
  section.find('tr').simulate('keydown', { nativeEvent: { keyCode: 32 } });
  expect(mockCallBack.mock.calls.length).toEqual(3);
});

it('should render a cell grid with refCallback', () => {
  const section = shallow(
    <CellGrid refCallback={jest.fn()} />,
  );
  expect(section).toMatchSnapshot();
});
