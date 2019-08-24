import React from 'react';
import Section from '../../src/Section';
import CellGrid from '../../src/CellGrid';
import Cell from '../../src/Cell';

// Snapshot test
it('should render a default section', () => {
  const shallowComponent = shallow(
    <Section title="test" />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a section with a row', () => {
  const shallowComponent = shallow(
    <Section title="test">
      <CellGrid>
        <Cell />
      </CellGrid>
    </Section>,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a section with isCollpased', () => {
  const shallowComponent = shallow(
    <Section title="test" isCollapsed />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a section with isCollapsible', () => {
  const shallowComponent = shallow(
    <Section title="test" isCollapsible />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a section with level', () => {
  const shallowComponent = shallow(
    <Section title="test" level={3} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a section with metaData', () => {
  const shallowComponent = shallow(
    <Section title="test" metaData={{}} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a section with onSelect', () => {
  const shallowComponent = shallow(
    <Section title="test" onSelect={jest.fn()} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a section with refCallback', () => {
  const shallowComponent = shallow(
    <Section title="test" refCallback={jest.fn()} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});
