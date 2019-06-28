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

      it('should have the class overlay', () => {
        const wrapper = shallow(defaultRender);
        expect(wrapper.find('div').at(3).props().className).toContain('overlay');
      });

      it('should default to a fullscreen overlay', () => {
        const wrapper = shallow(defaultRender);
        expect(wrapper.find('div').at(3).props().className).toContain('fullscreen');
      });

      it('should default to 100 zIndex layer', () => {
        const wrapper = shallow(defaultRender);
        expect(wrapper.find('div').at(3).props().className).toContain('layer-100');
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
      expect(wrapper.find('div').at(3).props().className).toContain('scrollable');
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
        expect(wrapper.find('div').at(3).props().className).toContain('light');
      });

      it('should render with the light backgroundStyle', () => {
        const overlayRender = <Overlay isOpen backgroundStyle="light" />;
        const wrapper = shallow(overlayRender);
        expect(wrapper.find('div').at(3).props().className).toContain('light');
        expect(wrapper).toMatchSnapshot();
      });

      it('should render with the dark backgroundStyle', () => {
        const overlayRender = <Overlay isOpen backgroundStyle="dark" />;
        const wrapper = shallow(overlayRender);
        expect(wrapper.find('div').at(3).props().className).toContain('dark');
        expect(wrapper).toMatchSnapshot();
      });

      it('should render with the clear backgroundStyle', () => {
        const overlayRender = <Overlay isOpen backgroundStyle="clear" />;
        const wrapper = shallow(overlayRender);
        expect(wrapper.find('div').at(3).props().className).toContain('clear');
        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('-zIndex-', () => {
      it('should render with zIndex 6000', () => {
        const overlayRender = <Overlay isOpen zIndex="6000" />;
        const wrapper = shallow(overlayRender);
        expect(wrapper.find('div').at(3).props().className).toContain('layer-6000');
      });

      it('should render with zIndex 7000', () => {
        const overlayRender = <Overlay isOpen zIndex="7000" />;
        const wrapper = shallow(overlayRender);
        expect(wrapper.find('div').at(3).props().className).toContain('layer-7000');
      });

      it('should render with zIndex 8000', () => {
        const overlayRender = <Overlay isOpen zIndex="8000" />;
        const wrapper = shallow(overlayRender);
        expect(wrapper.find('div').at(3).props().className).toContain('layer-8000');
      });

      it('should render with zIndex 9000', () => {
        const overlayRender = <Overlay isOpen zIndex="9000" />;
        const wrapper = shallow(overlayRender);
        expect(wrapper.find('div').at(3).props().className).toContain('layer-9000');
      });
    });
  });
});
