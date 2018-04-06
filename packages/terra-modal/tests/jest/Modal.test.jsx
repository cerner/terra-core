import React from 'react';
import ModalExample from './ModalExample';

it('should shallow an open modal', () => {
  const modal = shallow(<ModalExample />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal', () => {
  const modal = mount(<ModalExample />);
  expect(modal).toMatchSnapshot();
});

it('should shallow an open modal 6000 z-index', () => {
  const modal = shallow(<ModalExample zIndex="6000" />);
  expect(modal).toMatchSnapshot();
});

it('should shallow an open modal 8000 z-index', () => {
  const modal = shallow(<ModalExample zIndex="8000" />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal 8000 z-index', () => {
  const modal = mount(<ModalExample zIndex="8000" />);
  expect(modal).toMatchSnapshot();
});
