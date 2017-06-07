import React from 'react';
import OverlayContainer from '../../src/OverlayContainer';
import Overlay from '../../src/Overlay';

describe('OverlayContainer', () => {
  const defaultRender = <OverlayContainer />;
  const stardardRender = (
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
    expect(wrapper.prop('className')).toContain('terra-OverlayContainer');
  });

  it('should render when children are provided', () => {
    const wrapper = shallow(stardardRender);
    expect(wrapper).toMatchSnapshot();
  });
});
