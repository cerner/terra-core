import React from 'react';
import Modal from '../../src/Modal';


it('should render an open modal', () => {
  const modal = shallow(<Modal ariaLabel={'test modal'} isOpened><div>IsOpened</div></Modal>);
  expect(modal).toMatchSnapshot();
});
