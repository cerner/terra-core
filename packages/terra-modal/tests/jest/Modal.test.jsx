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

it('should render an open modal', () => {
  const modal = render(<ModalExample />);
  expect(modal).toMatchSnapshot();
});
