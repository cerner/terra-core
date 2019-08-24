import React from 'react';
import CellGrid from '../../src/CellGrid';
import Cell from '../../src/Cell';

// Snapshot test
it('should render a default cell grid', () => {
  const shallowComponent = shallow(<CellGrid><Cell /></CellGrid>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a selectable cell grid', () => {
  const shallowComponent = shallow(<CellGrid isSelectable><Cell /></CellGrid>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a selected cell grid', () => {
  const shallowComponent = shallow(<CellGrid isSelectable isSelected><Cell /></CellGrid>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a striped cell grid', () => {
  const shallowComponent = shallow(<CellGrid isStriped><Cell /></CellGrid>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a checkmark selectionStyle cell grid', () => {
  const shallowComponent = shallow(<CellGrid selectionStyle="checkmark"><Cell /></CellGrid>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a chevron selectionStyle cell grid', () => {
  const shallowComponent = shallow(<CellGrid selectionStyle="chevron"><Cell /></CellGrid>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a cell grid with onSelect', () => {
  const mockCallBack = jest.fn();

  const shallowComponent = shallow(
    <CellGrid isSelectable onSelect={mockCallBack}><Cell /></CellGrid>,
  );
  expect(shallowComponent).toMatchSnapshot();
  shallowComponent.find('.row').simulate('click');
  shallowComponent.find('.row').simulate('keydown', { nativeEvent: { keyCode: 13 } });
  shallowComponent.find('.row').simulate('keydown', { nativeEvent: { keyCode: 32 } });
  expect(mockCallBack.mock.calls.length).toEqual(3);
});

it('should render a cell grid with refCallback', () => {
  const shallowComponent = shallow(
    <CellGrid refCallback={jest.fn()}><Cell /></CellGrid>,
  );
  expect(shallowComponent).toMatchSnapshot();
});
