import React from 'react';
import Signature from '../../src/Signature';

describe('Signature', () => {
  const defaultRender = <Signature />;

  // Snapshot Tests
  it('should render a default component', () => {
    const signature = render(defaultRender);
    expect(signature).toMatchSnapshot();
  });

  it('should receive line width prop', () => {
    const signature = render(<Signature lineWidth={Signature.Opts.Width.EXTRA_FINE} />);
    expect(signature).toMatchSnapshot();
  });

  it('should receive line segments prop', () => {
    const signature = render(<Signature lineSegments={[]} />);
    expect(signature).toMatchSnapshot();
  });

  it('should have custom props', () => {
    const singleLine = <Signature id="foo" />;
    const signature = render(singleLine);
    expect(signature).toMatchSnapshot();
  });
});
