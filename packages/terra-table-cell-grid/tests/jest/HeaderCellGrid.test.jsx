import React from 'react';
import HeaderCellGrid from '../../src/HeaderCellGrid';
import HeaderCell from '../../src/HeaderCell';

// Snapshot test
it('should render a default header cell grid', () => {
  const shallowComponent = shallow(<HeaderCellGrid />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a cell grid with a cell', () => {
  const shallowComponent = shallow(<HeaderCellGrid><HeaderCell /></HeaderCellGrid>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a checkmark selectionStyle cell grid', () => {
  const shallowComponent = shallow(<HeaderCellGrid selectionStyle="checkmark" />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a chevron selectionStyle cell grid', () => {
  const shallowComponent = shallow(<HeaderCellGrid selectionStyle="chevron" />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a cell grid with refCallback', () => {
  const shallowComponent = shallow(
    <HeaderCellGrid refCallback={jest.fn()} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});
