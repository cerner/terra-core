import React from 'react';
import OverlayContainer from '../../src/OverlayContainer';
import Overlay from '../../src/Overlay';

describe('OverlayContainer', () => {
  const defaultRender = <OverlayContainer />;
  const overlay = <Overlay />;
  const standardRender = (
    <OverlayContainer className="user-defined-class" overlay={overlay}>
      Some Text Content
    </OverlayContainer>
  );

  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the class overlay-container', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('overlay-container');
  });

  it('should render when overlay is provided', () => {
    const wrapper = shallow(standardRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render when overlay and children are provided', () => {
    const overlayContainer = (
      <OverlayContainer overlay={overlay}>
        <div>
         Some Text Content
        </div>
      </OverlayContainer>
    );
    const wrapper = shallow(overlayContainer);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the class overlay-container along with user defined class', () => {
    const wrapper = shallow(standardRender);
    expect(wrapper.prop('className')).toContain('overlay-container');
    expect(wrapper.prop('className')).toContain('user-defined-class');
  });
});
