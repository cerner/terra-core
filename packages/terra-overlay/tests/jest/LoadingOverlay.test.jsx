import React from 'react';
import LoadingOverlay from '../../src/LoadingOverlay';

describe('LoadingOverlay', () => {
  it('should not render markup when isOpen is not provided', () => {
    const wrapper = enzymeIntl.mountWithIntl(<LoadingOverlay />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('when isOpen is provided', () => {
    describe('the default LoadingOverlay', () => {
      const defaultRender = <LoadingOverlay isOpen />;

      it('should render a default component', () => {
        const wrapper = enzymeIntl.mountWithIntl(defaultRender);
        expect(wrapper).toMatchSnapshot();
      });

      it('should have the class loading-overlay', () => {
        const wrapper = enzymeIntl.mountWithIntl(defaultRender);
        expect(wrapper.find('loading-overlay'));
      });
    });

    it('should render with message prop', () => {
      const overlayRender = <LoadingOverlay isOpen message="Loading!" />;
      const wrapper = enzymeIntl.mountWithIntl(overlayRender);
      expect(wrapper.find('.message').text()).toEqual('Loading!');
      expect(wrapper).toMatchSnapshot();
    });
  });
});
