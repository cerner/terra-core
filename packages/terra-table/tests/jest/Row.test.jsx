import React from 'react';
import Row from '../../src/Row';
import Cell from '../../src/Cell';

// Snapshot test
it('should render a default row', () => {
  const shallowComponent = shallow(<Row><Cell /></Row>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a selectable row', () => {
  const shallowComponent = shallow(<Row isSelectable><Cell /></Row>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a selected row', () => {
  const shallowComponent = shallow(<Row isSelectable isSelected><Cell /></Row>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a striped row', () => {
  const shallowComponent = shallow(<Row isStriped><Cell /></Row>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a checkmark selectionStyle row', () => {
  const shallowComponent = shallow(<Row selectionStyle="checkmark"><Cell /></Row>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a chevron selectionStyle row', () => {
  const shallowComponent = shallow(<Row selectionStyle="chevron"><Cell /></Row>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a row with onSelect', () => {
  const mockCallBack = jest.fn();

  const shallowComponent = shallow(
    <Row isSelectable onSelect={mockCallBack}><Cell /></Row>,
  );
  expect(shallowComponent).toMatchSnapshot();
  shallowComponent.find('.row').simulate('click');
  shallowComponent.find('.row').simulate('keydown', { nativeEvent: { keyCode: 13 } });
  shallowComponent.find('.row').simulate('keydown', { nativeEvent: { keyCode: 32 } });
  expect(mockCallBack.mock.calls.length).toEqual(3);
});

it('should render a row with refCallback', () => {
  const shallowComponent = shallow(
    <Row refCallback={jest.fn()}><Cell /></Row>,
  );
  expect(shallowComponent).toMatchSnapshot();
});
