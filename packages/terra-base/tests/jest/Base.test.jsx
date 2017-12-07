import React from 'react';
import Base from '../../src/Base';

// Snapshot Tests
it('should support rendering a string without translation', () => {
  const base = shallow(<Base>String</Base>);
  expect(base).toMatchSnapshot();
});

it('should support rendering an array of children without translation', () => {
  const base = shallow(<Base><div>1</div><div>2</div></Base>);
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
