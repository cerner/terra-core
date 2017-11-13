import React from 'react';
import Option from '../../src/SelectOption';

it('should render a default Option component', () => {
  const option = <Option value="a" />;
  const wrapper = shallow(option);
  expect(wrapper).toMatchSnapshot();
});

it('should render an Option component with display', () => {
  const option = <Option value="a" display="Apple" />;
  const wrapper = shallow(option);
  expect(wrapper).toMatchSnapshot();
});

it('should render a selected Option', () => {
  const option = <Option value="a" display="Apple" isSelected />;
  const wrapper = shallow(option);
  expect(wrapper).toMatchSnapshot();
});

it('should render a disabled Option', () => {
  const option = <Option value="a" display="Apple" disabled />;
  const wrapper = shallow(option);
  expect(wrapper).toMatchSnapshot();
});

it('should render an Option with children', () => {
  const option = <Option value="a" isSelected><div>child</div></Option>;
  const wrapper = shallow(option);
  expect(wrapper).toMatchSnapshot();
});

it('should render an Option with display when both display and children props are set', () => {
  const option = <Option value="a" display="Apple" isSelected><div>child</div></Option>;
  const wrapper = shallow(option);
  expect(wrapper).toMatchSnapshot();
});
