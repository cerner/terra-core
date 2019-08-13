import React from 'react';
import Section from '../../src/Section';
import CellGrid from '../../src/CellGrid';

// Snapshot test
it('should render a default section', () => {
  const section = shallow(
    <Section colSpan={1} title="test" />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a section with a row', () => {
  const section = shallow(
    <Section colSpan={1} title="test">
      <CellGrid />
    </Section>,
  );
  expect(section).toMatchSnapshot();
});

it('should render a section with isCollpased', () => {
  const section = shallow(
    <Section colSpan={1} title="test" isCollapsed />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a section with isCollapsible', () => {
  const section = shallow(
    <Section colSpan={1} title="test" isCollapsible />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a section with level', () => {
  const section = shallow(
    <Section colSpan={1} title="test" level={3} />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a section with metaData', () => {
  const section = shallow(
    <Section colSpan={1} title="test" metaData={{}} />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a section with onSelect', () => {
  const section = shallow(
    <Section colSpan={1} title="test" onSelect={jest.fn()} />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a section with refCallback', () => {
  const section = shallow(
    <Section colSpan={1} title="test" refCallback={jest.fn()} />,
  );
  expect(section).toMatchSnapshot();
});
