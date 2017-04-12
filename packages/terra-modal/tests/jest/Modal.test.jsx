import React from 'react';
import Modal from '../../src/Modal';


it('should shallow an open modal', () => {
  const modal = shallow(<Modal ariaLabel={'test modal'} isOpened><div>IsOpened<button>focusable button</button></div></Modal>);
  expect(modal).toMatchSnapshot();
});

it('should render an open modal', () => {
  const modal = render(<Modal ariaLabel={'test modal'} isOpened><div>IsOpened<button>focusable button</button></div></Modal>);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal', () => {
  const modal = mount(<Modal ariaLabel={'test modal'} isOpened><div>IsOpened<button>focusable button</button></div></Modal>);
  expect(modal).toMatchSnapshot();
});
