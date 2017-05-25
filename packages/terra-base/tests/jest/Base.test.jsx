import React from 'react';
import Base from '../../src/Base';

// Snapshot Tests
it('should support rendering a string without translation', () => {
  const base = shallow(<Base>String</Base>);

  expect(base).toMatchSnapshot();
});

it('throws error for missing required locale', () => {
  const messages = { Terra: 'Terra' };

  try {
    shallow(<Base customMessages={messages} >String</Base>);
  } catch (e) {
    expect(e.message).toContain('Missing locale prop');
  }
});

it('should support rendering a string as children', () => {
  const base = shallow(<Base locale="en-US">String</Base>);
  base.setState({ load: true });

  expect(base).toMatchSnapshot();
});

it('should support rendering an element as children', () => {
  const base = shallow(<Base locale="en-US"><p>Element</p></Base>);
  base.setState({ load: true });

  expect(base).toMatchSnapshot();
});

it('should support rendering an array of elements as a children', () => {
  const base = shallow(<Base locale="en-US"><h1>Heading</h1><p>Element 1</p><p>Element 2</p></Base>);
  base.setState({ load: true });

  expect(base).toMatchSnapshot();
});

it('should render the component with merged attributes', () => {
  const base = shallow(<Base className="TestClass" data-mock="data" id="TestId" locale="en-US">String</Base>);
  base.setState({ load: true });

  expect(base).toMatchSnapshot();
});

it('should render the component with customMessages', () => {
  const customMessages = {
    'App.test': 'App test',
  };
  const base = shallow(<Base customMessages={customMessages} locale="en-US">customMessages</Base>);
  base.setState({ load: true });

  expect(base).toMatchSnapshot();
});
