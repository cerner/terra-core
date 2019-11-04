import React from 'react';
import ButtonGroup from '../../src/ButtonGroup';

const button1 = <ButtonGroup.Button text="Button 1" key="1" />;
const button2 = <ButtonGroup.Button text="Button 2" key="2" />;
const button3 = <ButtonGroup.Button text="Button 3" key="3" />;

it('should render an empty component', () => {
  const buttonGroup = shallow(<ButtonGroup />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with children', () => {
  const buttonGroup = shallow((
    <ButtonGroup>
      {button1}
    </ButtonGroup>
  ));
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with children selected', () => {
  const buttonGroup = shallow((
    <ButtonGroup selectedKeys={['1']}>
      {button1}
      {button2}
    </ButtonGroup>
  ));
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a block button group with children', () => {
  const buttonGroup = shallow((
    <ButtonGroup isBlock>
      {button1}
      {button2}
      {button3}
    </ButtonGroup>
  ));
  expect(buttonGroup).toMatchSnapshot();
});

it('should call onChange when button is selected', () => {
  const onChange = jest.fn();
  const buttonGroup = shallow((
    <ButtonGroup onChange={onChange}>
      {button1}
      {button2}
    </ButtonGroup>
  ));

  buttonGroup.childAt(1).simulate('click', { preventDefault() {} });
  expect(onChange).toBeCalled();

  buttonGroup.childAt(0).simulate('click', { preventDefault() {} });
  expect(onChange).toBeCalled();
});

it('should select a button', () => {
  const buttonGroup = shallow((
    <ButtonGroup>
      {button1}
      {button2}
    </ButtonGroup>
  ));

  buttonGroup.childAt(0).simulate('click', { preventDefault() {} });
  expect(buttonGroup).toMatchSnapshot();

  buttonGroup.childAt(1).simulate('click', { preventDefault() {} });
  expect(buttonGroup).toMatchSnapshot();
});
