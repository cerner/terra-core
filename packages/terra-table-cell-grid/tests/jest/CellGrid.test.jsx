import React from 'react';
import CellGrid from '../../src/CellGrid';
import Cell from '../../src/Cell';

// Snapshot test
it('should render a default cell grid', () => {
  const shallowComponent = shallow(<CellGrid />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a cell grid with a cell', () => {
  const shallowComponent = shallow(<CellGrid><Cell /></CellGrid>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a selectable cell grid', () => {
  const shallowComponent = shallow(<CellGrid isSelectable />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a selected cell grid', () => {
  const shallowComponent = shallow(<CellGrid isSelectable isSelected />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a striped cell grid', () => {
  const shallowComponent = shallow(<CellGrid isStriped />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a checkmark selectionStyle cell grid', () => {
  const shallowComponent = shallow(<CellGrid selectionStyle="checkmark" />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a chevron selectionStyle cell grid', () => {
  const shallowComponent = shallow(<CellGrid selectionStyle="chevron" />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a cell grid with onSelect', () => {
  const mockCallBack = jest.fn();

  const shallowComponent = shallow(
    <CellGrid isSelectable onSelect={mockCallBack} />,
  );
  expect(shallowComponent).toMatchSnapshot();
  shallowComponent.find('tr').simulate('click');
  shallowComponent.find('tr').simulate('keydown', { nativeEvent: { keyCode: 13 } });
  shallowComponent.find('tr').simulate('keydown', { nativeEvent: { keyCode: 32 } });
  expect(mockCallBack.mock.calls.length).toEqual(3);
});

it('should render a cell grid with refCallback', () => {
  const shallowComponent = shallow(
    <CellGrid refCallback={jest.fn()} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});
