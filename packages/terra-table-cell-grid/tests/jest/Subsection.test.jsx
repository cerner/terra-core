import React from 'react';
import Subsection from '../../src/Subsection';
import CellGrid from '../../src/CellGrid';
import Cell from '../../src/Cell';

// Snapshot test
it('should render a default subsection', () => {
  const shallowComponent = shallow(
    <Subsection title="test" />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a subsection with a cellgrid', () => {
  const shallowComponent = shallow(
    <Subsection title="test">
      <CellGrid>
        <Cell />
      </CellGrid>
    </Subsection>,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a subsection with isCollpased', () => {
  const shallowComponent = shallow(
    <Subsection title="test" isCollapsed />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a subsection with isCollapsible', () => {
  const shallowComponent = shallow(
    <Subsection title="test" isCollapsible />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a subsection with level', () => {
  const shallowComponent = shallow(
    <Subsection title="test" level={4} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a subsection with metaData', () => {
  const shallowComponent = shallow(
    <Subsection title="test" metaData={{}} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a subsection with onSelect', () => {
  const shallowComponent = shallow(
    <Subsection title="test" onSelect={jest.fn()} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a subsection with refCallback', () => {
  const shallowComponent = shallow(
    <Subsection title="test" refCallback={jest.fn()} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});
