import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { IntlProvider } from 'react-intl';
import LoadingOverlay from '../../src/LoadingOverlay';
import messages from '../../translations/en-US.json';

const locale = 'en-US';

describe('LoadingOverlay', () => {
  it('should render a null component when isOpen is not provided', () => {
    const wrapper = shallow(<IntlProvider locale={locale} messages={messages}><LoadingOverlay /></IntlProvider>);
    expect(wrapper).toMatchSnapshot();
  });

  describe('when isOpen is provided', () => {
    describe('the default LoadingOverlay', () => {
      const defaultRender = (<IntlProvider locale={locale} messages={messages}><LoadingOverlay isOpen /></IntlProvider>);
      const wrapper = shallow(defaultRender);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render with message prop', () => {
      const overlayRender = (<IntlProvider locale={locale} messages={messages}><LoadingOverlay isOpen message="Loading!" /></IntlProvider>);
      const wrapper = shallow(overlayRender);
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('throws error on missing locale prop in Base', () => {
    try {
      shallow(<LoadingOverlay />);
    } catch (e) {
      expect(e.message).toContain('add locale prop to Base component');
    }
  });
});
