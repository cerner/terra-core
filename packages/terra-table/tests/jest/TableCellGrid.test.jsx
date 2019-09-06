import React from 'react';
import Table from '../../src/Table';

// Snapshot test
it('should render a default table', () => {
  const shallowComponent = shallow(
    <Table />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a table with standard padding', () => {
  const shallowComponent = shallow(
    <Table
      paddingStyle="standard"
    />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a table with compact padding', () => {
  const shallowComponent = shallow(
    <Table
      paddingStyle="compact"
    />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a table with fill style', () => {
  const shallowComponent = shallow(
    <Table
      fill
    />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a table with header/footer nodes', () => {
  const shallowComponent = shallow(
    <Table
      headerNode={<p>header</p>}
      footerNode={<p>footer</p>}
    />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a table with refCallback', () => {
  const shallowComponent = shallow(
    <Table
      refCallback={jest.fn()}
    />,
  );
  expect(shallowComponent).toMatchSnapshot();
});
