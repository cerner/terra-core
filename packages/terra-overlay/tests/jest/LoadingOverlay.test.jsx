import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';
import LoadingOverlay from '../../src/LoadingOverlay';

describe('LoadingOverlay', () => {
  it('should not render markup when isOpen is not provided', () => {
    const wrapper = mountWithIntl(<LoadingOverlay />);
    const testComponent = wrapper.children();
    expect(testComponent).toMatchSnapshot();
  });

  describe('when isOpen is provided', () => {
    describe('the default LoadingOverlay', () => {
      const defaultRender = <LoadingOverlay isOpen />;

      it('should render a default component', () => {
        const wrapper = mountWithIntl(defaultRender);
        const testComponent = wrapper.children();
        expect(testComponent).toMatchSnapshot();
      });

      it('should have the class loading-overlay', () => {
        const wrapper = mountWithIntl(defaultRender);
        const testComponent = wrapper.children();
        expect(testComponent.find('loading-overlay'));
      });
    });

    it('should render with message prop', () => {
      const overlayRender = <LoadingOverlay isOpen message="Loading!" />;
      const wrapper = mountWithIntl(overlayRender);
      const testComponent = wrapper.children();
      expect(testComponent.find('.message').text()).toEqual('Loading!');
      expect(testComponent).toMatchSnapshot();
    });
  });
});
