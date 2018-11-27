import React from 'react';
import intlContexts from './intl-context-setup';
import LoadingOverlay from '../../src/LoadingOverlay';

describe('LoadingOverlay', () => {
  it('should not render markup when isOpen is not provided', () => {
    const wrapper = mount(<LoadingOverlay />, intlContexts.mountContext);
    expect(wrapper).toMatchSnapshot();
  });

  describe('when isOpen is provided', () => {
    describe('the default LoadingOverlay', () => {
      const defaultRender = <LoadingOverlay isOpen />;

      it('should render a default component', () => {
        const wrapper = mount(defaultRender, intlContexts.mountContext);
        expect(wrapper).toMatchSnapshot();
      });

      it('should have the class loading-overlay', () => {
        const wrapper = mount(defaultRender, intlContexts.mountContext);
        expect(wrapper.find('loading-overlay'));
      });

      it('should have the default message of Loading...', () => {
        const wrapper = mount(defaultRender, intlContexts.mountContext);
        expect(wrapper.find('.message').text()).toEqual('Loading...');
      });
    });

    it('should render with message prop', () => {
      const overlayRender = <LoadingOverlay isOpen message="Loading!" />;
      const wrapper = mount(overlayRender, intlContexts.mountContext);
      expect(wrapper.find('.message').text()).toEqual('Loading!');
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('throws error on missing locale prop in Base', () => {
    global.console = { error: jest.fn() };

    expect(() => {
      render(<LoadingOverlay />);
    }).toThrowError();
    // eslint-disable-next-line no-console
    expect(console.error).toBeCalledWith(expect.stringContaining('Component is internationalized, and must be wrapped in terra-base'));
  });
});
