import React from 'react';
import HeaderRow from '../../src/HeaderRow';
import HeaderCell from '../../src/HeaderCell';

// Snapshot test
it('should render a default header row', () => {
  const shallowComponent = shallow(<HeaderRow />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a row with a cell', () => {
  const shallowComponent = shallow(<HeaderRow><HeaderCell /></HeaderRow>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a checkmark selectionStyle row', () => {
  const shallowComponent = shallow(<HeaderRow selectionStyle="checkmark" />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a chevron selectionStyle row', () => {
  const shallowComponent = shallow(<HeaderRow selectionStyle="chevron" />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a row with refCallback', () => {
  const shallowComponent = shallow(
    <HeaderRow refCallback={jest.fn()} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});
