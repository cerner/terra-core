import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import i18nSupportedLocales from 'terra-toolkit/scripts/aggregate-translations/i18nSupportedLocales';

import I18nProvider from '../../../I18nProvider';
import i18nLoader from '../../../i18nLoader';

// Add Portuguese-Guinea-Bissau, Zulu & Zulu-South African locales as test locales (supported by intl)
const testLocales = i18nSupportedLocales.concat(['pt-GW', 'zu', 'zu-ZA']);

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocale: 'en',
      areTranslationsLoaded: false,
      locale: props.locale,
      messages: {},
    };
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
  }

  componentDidMount() {
    i18nLoader(this.props.locale, this.setState, this);
  }

  handleLocaleChange(e) {
    this.setState({ selectedLocale: e.target.value });
    i18nLoader(e.target.value, this.setState, this);
  }

  render() {
    if (!this.state.areTranslationsLoaded) {
      return <div />;
    }
    return (
      <I18nProvider
        locale={this.state.locale}
        messages={this.state.messages}
      >
        <label htmlFor="change-locale"> Current locale: </label>
        <select id="change-locale" onChange={this.handleLocaleChange} value={this.state.selectedLocale}>
          {testLocales.map(locale => (<option key={locale} value={locale}>{locale}</option>))}
        </select>
        <p id="translated-message">
          <span style={{ fontWeight: 'bold' }}> Loaded locale message: </span>
          <FormattedMessage id="Terra.ajax.error" />
        </p>
        {(this.state.selectedLocale).includes('zu')
          && <p style={{ color: 'red', fontWeight: 'bold' }}>Using the en locale as fallback.</p>}
        {this.state.selectedLocale === 'pt-GW'
          && <p style={{ color: 'red', fontWeight: 'bold' }}>Using the pt locale as fallback.</p>}
      </I18nProvider>
    );
  }
}

Base.propTypes = {
  locale: PropTypes.string,
};

Base.defaultProps = {
  locale: 'en',
};

export default () => <Base />;
