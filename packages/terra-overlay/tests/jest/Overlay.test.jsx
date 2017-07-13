import React from 'react';
import Overlay from '../../src/Overlay';

describe('Overlay', () => {
  it('should render a null component when isOpen is not provided', () => {
    const wrapper = shallow(<Overlay />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('when isOpen is provided', () => {
    describe('-default Overlay when isOpen-', () => {
      const defaultRender = <Overlay isOpen />;

      it('should render a default component', () => {
        const wrapper = shallow(defaultRender);
        expect(wrapper).toMatchSnapshot();
      });

      it('should have the class terra-Overlay', () => {
        const wrapper = shallow(defaultRender);
        expect(wrapper.childAt(0).prop('className')).toContain('overlay');
      });

      it('should default to a fullscreen overlay', () => {
        const wrapper = shallow(defaultRender);
        expect(wrapper.childAt(0).prop('className')).toContain('fullscreen');
      });
    });

    it('should render with content', () => {
      const overlayRender = (
        <Overlay isOpen>
          Overlay message
        </Overlay>
      );
      const wrapper = shallow(overlayRender);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render with isScrollable', () => {
      const overlayRender = <Overlay isOpen isScrollable />;
      const wrapper = shallow(overlayRender);
      expect(wrapper.childAt(0).prop('className')).toContain('scrollable');
      expect(wrapper).toMatchSnapshot();
    });

    it('should render with onRequestClose', () => {
      const overlayRender = <Overlay isOpen onRequestClose={() => {}} />;
      const wrapper = shallow(overlayRender);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render with isRelativeToContainer', () => {
      const overlayRender = <Overlay isOpen isRelativeToContainer />;
      const wrapper = shallow(overlayRender);
      expect(wrapper.prop('className')).toContain('container');
      expect(wrapper).toMatchSnapshot();
    });

    describe('-backgroundStyle-', () => {
      it('should use the default backgroundStyle when no value is given', () => {
        const overlayRender = <Overlay isOpen />;
        const wrapper = shallow(overlayRender);
        expect(wrapper.childAt(0).prop('className')).toContain('light');
      });

      it('should render with the light backgroundStyle', () => {
        const overlayRender = <Overlay isOpen backgroundStyle="light" />;
        const wrapper = shallow(overlayRender);
        expect(wrapper.childAt(0).prop('className')).toContain('light');
        expect(wrapper).toMatchSnapshot();
      });

      it('should render with the dark backgroundStyle', () => {
        const overlayRender = <Overlay isOpen backgroundStyle="dark" />;
        const wrapper = shallow(overlayRender);
        expect(wrapper.childAt(0).prop('className')).toContain('dark');
        expect(wrapper).toMatchSnapshot();
      });

      it('should render with the clear backgroundStyle', () => {
        const overlayRender = <Overlay isOpen backgroundStyle="clear" />;
        const wrapper = shallow(overlayRender);
        expect(wrapper.childAt(0).prop('className')).toContain('clear');
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
