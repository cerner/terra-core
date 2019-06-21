import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames/bind';

import I18nProvider from '../../../I18nProvider';
import i18nLoader from '../../../i18nLoader';
import styles from './DefaultI18n.module.scss';

const cx = classNames.bind(styles);

// Add Portuguese-Guinea-Bissau, Zulu & Zulu-South African locales as test locales (supported by intl)
const testLocales = ['en', 'en-GB', 'pt', 'pt-GW', 'zu', 'zu-ZA'];

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
      <div>
        <I18nProvider
          locale={this.state.locale}
          messages={this.state.messages}
        >
          <label htmlFor="change-locale"> Current locale: </label>
          <select id="change-locale" onChange={this.handleLocaleChange} value={this.state.selectedLocale}>
            {testLocales.map(locale => (<option key={locale} value={locale}>{locale}</option>))}
          </select>
          <p id="translated-message">
            <span className={cx('weighted-text')}> Loaded locale message: </span>
            <FormattedMessage id="Terra.ajax.error" />
          </p>
          {(this.state.selectedLocale).includes('zu')
            && <p className={cx('fallback-message')}>Using the en locale as fallback.</p>}
          {this.state.selectedLocale === 'pt-GW'
            && <p className={cx('fallback-message')}>Using the pt locale as fallback.</p>}
        </I18nProvider>
      </div>
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
