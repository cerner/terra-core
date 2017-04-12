import React from 'react';
import ModalContent from '../../src/ModalContent';


it('should shallow an open modal', () => {
  const modal = shallow(<ModalContent ariaLabel={'test modal'} isOpened><div>IsOpened<button>focusable button</button></div></ModalContent>);
  expect(modal).toMatchSnapshot();
});

it('should render an open modal', () => {
  const modal = render(<ModalContent ariaLabel={'test modal'} isOpened><div>IsOpened<button>focusable button</button></div></ModalContent>);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal', () => {
  const modal = mount(<ModalContent ariaLabel={'test modal'} isOpened><div>IsOpened<button>focusable button</button></div></ModalContent>);
  expect(modal).toMatchSnapshot();
});
