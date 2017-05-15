/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

const propTypes = {
  /**
   * The component that will be wrapped by i18n provider.
   */
  children: PropTypes.node.isRequired,
  /**
   * The locale name.
   */
  locale: PropTypes.string.isRequired,
  /**
   * Translations messages object.
   */
  messages: PropTypes.object.isRequired,
};

const I18nProvider = props => (
  <IntlProvider locale={props.locale} key={props.locale} messages={props.messages}>
    <div>
      {props.children}
    </div>
  </IntlProvider>
);

I18nProvider.propTypes = propTypes;

export default I18nProvider;
