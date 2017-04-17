/* eslint-disable react/forbid-prop-types */

import React, { PropTypes } from 'react';
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

const I18nProvider = (props) => {
  const {
    children,
    locale,
    messages,
    ...customProps
  } = props;

  return (
    <IntlProvider
      {...customProps}
      locale={locale}
      key={locale}
      messages={messages}
    >
      <div>
        {children}
      </div>
    </IntlProvider>
  );
};

I18nProvider.propTypes = propTypes;

export default I18nProvider;
