import React from 'react';
import Signature from '../../src/Signature';

describe('Signature', () => {
  const defaultRender = <Signature />;

  // Snapshot Tests
  it('should render a default component', () => {
    const signature = shallow(defaultRender);
    expect(signature).toMatchSnapshot();
  });

  // Structure Tests
  it('should have the class terra-Signature', () => {
    const signature = shallow(defaultRender);
    expect(signature.prop('className')).toContain('terra-Signature');
  });
});
