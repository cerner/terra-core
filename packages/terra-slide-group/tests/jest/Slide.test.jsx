import React from 'react';
import Slide from '../../src/Slide';

it('should render a default Slide', () => {
  const wrapper = shallow((
    <Slide>
      <div>Slide Content</div>
    </Slide>
  ));
  expect(wrapper).toMatchSnapshot();
});

it('should render a hidden Slide', () => {
  const wrapper = shallow((
    <Slide isHidden>
      <div>Slide Content</div>
    </Slide>
  ));
  expect(wrapper).toMatchSnapshot();
});
