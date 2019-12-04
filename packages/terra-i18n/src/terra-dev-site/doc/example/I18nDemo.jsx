import React from 'react';
import { FormattedMessage, FormattedDate, FormattedNumber } from 'react-intl';
import { I18nProvider, i18nLoader } from 'terra-i18n';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areTranslationsLoaded: false,
      locale: 'en-US',
      messages: {},
    };
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
  }

  componentDidMount() {
    i18nLoader(this.state.locale, this.setState, this);
  }

  handleLocaleChange(e) {
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
        <div>
          <span> Example Message Format: </span>
          <FormattedMessage id="Terra.ajax.error" />
        </div>
        <p>
          <span> Example Number Format: </span>
          <FormattedNumber value={parseFloat('1123432.123')} />
        </p>
        <p>
          <span>Example Date Format: </span>
          <FormattedDate value={new Date(2011, 03, 24)} />
        </p>
        <label htmlFor="locale">
          {' '}
Current locale:
          {this.state.locale}
          {' '}

        </label>
        <select id="locale" value={this.state.locale} onChange={this.handleLocaleChange}>
          <option value="en">en</option>
          <option value="en-GB">en-GB</option>
          <option value="en-US">en-US</option>
          <option value="de">de</option>
          <option value="es">es</option>
          <option value="fr">fr</option>
          <option value="nl">nl</option>
          <option value="pt">pt</option>
        </select>
      </I18nProvider>
    );
  }
}

export default () => <Demo />;
