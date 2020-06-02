/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import Row from '../../src/GridRow';
import Col from '../../src/GridColumn';

// Snapshot Tests
it('should render a default component', () => {
  const wrapper = shallow(<Row><Col>Test</Col></Row>);
  expect(wrapper).toMatchSnapshot();
});

// Prop Tests
it('should have customized class name', () => {
  const row = <Row className="test"><Col>Test</Col></Row>;
  const wrapper = shallow(row);
  expect(wrapper.prop('className')).toContain('grid test');
});

// Error Handling Test
it('should throw error for required children', () => {
  try {
    shallow(<Row />);
  } catch (e) {
    expect(e.message).toContain('The prop `children` is marked as required');
  }
});

it('correctly applies the theme context className', () => {
  const wrapper = mount(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <Row className="test"><Col>Test</Col></Row>
    </ThemeContextProvider>,
  );
  expect(wrapper).toMatchSnapshot();
});

