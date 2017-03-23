import React from 'react';
import ButtonGroup from '../../src/ButtonGroup';

it('should render a default component', () => {
  const buttonGroup = shallow(<ButtonGroup />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with intent = default', () => {
  const buttonGroup = shallow(<ButtonGroup intent="default" />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with intent = secondary', () => {
  const buttonGroup = shallow(<ButtonGroup intent="secondary" />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with size = tiny', () => {
  const buttonGroup = shallow(<ButtonGroup size="tiny" />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with size = small', () => {
  const buttonGroup = shallow(<ButtonGroup size="small" />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with size = medium', () => {
  const buttonGroup = shallow(<ButtonGroup size="medium" />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with size = large', () => {
  const buttonGroup = shallow(<ButtonGroup size="large" />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with size = huge', () => {
  const buttonGroup = shallow(<ButtonGroup size="huge" />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a compact button group', () => {
  const buttonGroup = shallow(<ButtonGroup isCompact />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a selectable button group', () => {
  const buttonGroup = shallow(<ButtonGroup isSelectable />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with buttons', () => {
  const buttonGroup = shallow(<ButtonGroup buttons={[<ButtonGroup.Button />]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with children', () => {
  const buttonGroup = shallow((
    <ButtonGroup>
      <ButtonGroup.Button />
    </ButtonGroup>
  ));
  expect(buttonGroup).toMatchSnapshot();
});
