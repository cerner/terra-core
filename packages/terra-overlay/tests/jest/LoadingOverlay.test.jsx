import React from 'react';
import LoadingOverlay from '../../src/LoadingOverlay';

describe('LoadingOverlay', () => {
  it('should render a null component when isOpen is not provided', () => {
    const wrapper = shallow(<LoadingOverlay />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('when isOpen is provided', () => {
    describe('the default LoadingOverlay', () => {
      const defaultRender = <LoadingOverlay isOpen />;

      it('should render a default component', () => {
        const wrapper = shallow(defaultRender);
        expect(wrapper).toMatchSnapshot();
      });

      it('should have the class terra-LoadingOverlay', () => {
        const wrapper = shallow(defaultRender);
        expect(wrapper.prop('className')).toContain('terra-LoadingOverlay');
      });

      it('should have the default message of Loading...', () => {
        const wrapper = shallow(defaultRender);
        expect(wrapper.find('.terra-LoadingOverlay-message').text()).toEqual('Loading...');
      });
    });

    it('should render with message prop', () => {
      const overlayRender = <LoadingOverlay isOpen message="Loading!" />;
      const wrapper = shallow(overlayRender);
      expect(wrapper.find('.terra-LoadingOverlay-message').text()).toEqual('Loading!');
      expect(wrapper).toMatchSnapshot();
    });
  });
});
