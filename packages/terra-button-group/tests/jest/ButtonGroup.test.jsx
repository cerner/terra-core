import React from 'react';
import ButtonGroup from '../../src/ButtonGroup';

const button1 = <ButtonGroup.Button key="1" />;
const button2 = <ButtonGroup.Button key="2" />;

it('should render a default component', () => {
  const buttonGroup = shallow(<ButtonGroup buttons={[button1]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with variant = default', () => {
  const buttonGroup = shallow(<ButtonGroup variant="default" buttons={[button1]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with variant = secondary', () => {
  const buttonGroup = shallow(<ButtonGroup variant="secondary" buttons={[button1]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with size = tiny', () => {
  const buttonGroup = shallow(<ButtonGroup size="tiny" buttons={[button1]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with size = small', () => {
  const buttonGroup = shallow(<ButtonGroup size="small" buttons={[button1]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with size = medium', () => {
  const buttonGroup = shallow(<ButtonGroup size="medium" buttons={[button1]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with size = large', () => {
  const buttonGroup = shallow(<ButtonGroup size="large" buttons={[button1]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with size = huge', () => {
  const buttonGroup = shallow(<ButtonGroup size="huge" buttons={[button1]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a compact button group', () => {
  const buttonGroup = shallow(<ButtonGroup isCompact buttons={[button1]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a selectable button group', () => {
  const buttonGroup = shallow(<ButtonGroup isSelectable buttons={[button1]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with buttons', () => {
  const buttonGroup = shallow(<ButtonGroup buttons={[button1]} />);
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

it('should call onChange when button is selected', () => {
  const onChange = jest.fn();
  const buttonGroup = shallow(<ButtonGroup onChange={onChange} isSelectable buttons={[button1, button2]} />);

  buttonGroup.childAt(1).simulate('click', { preventDefault() {} });
  expect(onChange).toBeCalled();

  buttonGroup.childAt(0).simulate('click', { preventDefault() {} });
  expect(onChange).toBeCalled();
});

it('should select a button', () => {
  const buttonGroup = shallow(<ButtonGroup isSelectable buttons={[button1, button2]} />);

  buttonGroup.childAt(0).simulate('click', { preventDefault() {} });
  expect(buttonGroup).toMatchSnapshot();

  buttonGroup.childAt(1).simulate('click', { preventDefault() {} });
  expect(buttonGroup).toMatchSnapshot();
});
