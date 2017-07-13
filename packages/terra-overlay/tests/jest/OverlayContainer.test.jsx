import React from 'react';
import OverlayContainer from '../../src/OverlayContainer';
import Overlay from '../../src/Overlay';

describe('OverlayContainer', () => {
  const defaultRender = <OverlayContainer />;
  const standardRender = (
    <OverlayContainer>
      <Overlay />
      Some Text Content
    </OverlayContainer>
  );

  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the class terra-OverlayContainer', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('overlay-container');
  });

  it('should render when children are provided', () => {
    const wrapper = shallow(standardRender);
    expect(wrapper).toMatchSnapshot();
  });
});
