import React from 'react';
import ButtonGroup from '../../src/ButtonGroup';

it('should render a default component', () => {
  const buttonGroup = shallow(<ButtonGroup buttons={[<ButtonGroup.Button key="1" />]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with variant = default', () => {
  const buttonGroup = shallow(<ButtonGroup variant="default" buttons={[<ButtonGroup.Button key="1" />]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with variant = secondary', () => {
  const buttonGroup = shallow(<ButtonGroup variant="secondary" buttons={[<ButtonGroup.Button key="1" />]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with size = tiny', () => {
  const buttonGroup = shallow(<ButtonGroup size="tiny" buttons={[<ButtonGroup.Button key="1" />]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with size = small', () => {
  const buttonGroup = shallow(<ButtonGroup size="small" buttons={[<ButtonGroup.Button key="1" />]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with size = medium', () => {
  const buttonGroup = shallow(<ButtonGroup size="medium" buttons={[<ButtonGroup.Button key="1" />]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with size = large', () => {
  const buttonGroup = shallow(<ButtonGroup size="large" buttons={[<ButtonGroup.Button key="1" />]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with size = huge', () => {
  const buttonGroup = shallow(<ButtonGroup size="huge" buttons={[<ButtonGroup.Button key="1" />]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a compact button group', () => {
  const buttonGroup = shallow(<ButtonGroup isCompact buttons={[<ButtonGroup.Button key="1" />]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a selectable button group', () => {
  const buttonGroup = shallow(<ButtonGroup isSelectable buttons={[<ButtonGroup.Button key="1" />]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with buttons', () => {
  const buttonGroup = shallow(<ButtonGroup buttons={[<ButtonGroup.Button key="1" />]} />);
  expect(buttonGroup).toMatchSnapshot();
});

it('should render a button group with children', () => {
  const buttonGroup = shallow((
    <ButtonGroup>
      <ButtonGroup.Button key="1" />
    </ButtonGroup>
  ));
  expect(buttonGroup).toMatchSnapshot();
});
