import React from 'react';
import ModalOverlay from '../../src/ModalOverlay';

it('should shallow an open modal overlay', () => {
  const modal = shallow(<ModalOverlay />);
  expect(modal).toMatchSnapshot();
});

it('should render an open modal overlay', () => {
  const modal = render(<ModalOverlay />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal overlay', () => {
  const modal = mount(<ModalOverlay />);
  expect(modal).toMatchSnapshot();
});
