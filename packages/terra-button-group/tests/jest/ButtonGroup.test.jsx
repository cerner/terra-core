import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import ButtonGroup from '../../src/ButtonGroup';

const button1 = <ButtonGroup.Button text="Button 1" key="1" />;
const button2 = <ButtonGroup.Button text="Button 2" key="2" />;
const button3 = <ButtonGroup.Button text="Button 3" key="3" />;

it('should render an empty component', () => {
  const buttonGroup = enzyme.shallow(<ButtonGroup />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with children', () => {
  const buttonGroup = enzyme.shallow((
    <ButtonGroup>
      {button1}
    </ButtonGroup>
  ));
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with children selected', () => {
  const buttonGroup = enzyme.shallow((
    <ButtonGroup selectedKeys={['1']}>
      {button1}
      {button2}
    </ButtonGroup>
  ));
  expect(buttonGroup).toMatchSnapshot();
});

it('should only render enabled buttons as toggle buttons', () => {
  const buttonGroup = enzyme.shallow((
    <ButtonGroup selectedKeys={['1']}>
      {button1}
      {button2}
      <ButtonGroup.Button text="Disabled Button" key="dis" isDisabled />
    </ButtonGroup>
  ));
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a block button group with children', () => {
  const buttonGroup = enzyme.shallow((
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
  const buttonGroup = enzyme.shallow((
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
  const buttonGroup = enzyme.shallow((
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

it('should apply correct role for multiSelect button group', () => {
  const onChange = jest.fn();
  const buttonGroup = enzyme.shallow((
    <ButtonGroup isMultiSelect onChange={onChange}>
      {button1}
      {button2}
    </ButtonGroup>
  ));
  expect(buttonGroup).toMatchSnapshot();
});

it('should apply correct role for single select button group', () => {
  const onChange = jest.fn();
  const buttonGroup = enzyme.shallow((
    <ButtonGroup onChange={onChange}>
      {button1}
      {button2}
    </ButtonGroup>
  ));
  expect(buttonGroup).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const buttonGroup = enzyme.mount(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <ButtonGroup>
        {button1}
        {button2}
      </ButtonGroup>
    </ThemeContextProvider>,
  );
  expect(buttonGroup).toMatchSnapshot();
});
