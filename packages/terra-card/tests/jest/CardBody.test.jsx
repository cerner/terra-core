import React from 'react';
import CardBody from '../../src/CardBody';

describe('CardBody', () => {
  const shallowRender = shallow(<CardBody />);

  // Snapshot Tests
  it('should render a default component', () => {
    expect(shallowRender).toMatchSnapshot();
  });

  it('should contain the class to apply horizontal padding', () => {
    expect(shallowRender.prop('className')).toContain('horizontal-padding');
  });

  it('should contain the class to apply vertical padding', () => {
    expect(shallowRender.prop('className')).toContain('vertical-padding');
  });

  it('should contain the class to center content when prop to center content is passed', () => {
    const contentCenteredCard = shallow(<CardBody isContentCentered />);
    expect(contentCenteredCard.prop('className')).toContain('center-content');
  });

  it('should not contain the class to center content when prop to center content is not passed', () => {
    expect(shallowRender.prop('className')).not.toContain('center-content');
  });
});
