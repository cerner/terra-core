import React from 'react';
import { FormattedMessage } from 'react-intl';

import { I18nProvider, i18nLoader } from '../../lib/I18n';

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <FormattedMessage id="Terra.ajax.error" />
        <label htmlFor="locale"> Current locale: {this.state.locale} </label>
        <select onChange={this.handleLocaleChange}>
          <option value="en">en</option>
          <option value="en-GB">en-GB</option>
          <option value="en-US">en-US</option>
          <option value="de">de</option>
          <option value="es">es</option>
          <option value="fr">fr</option>
          <option value="pt">pt</option>
          <option value="fi-FI">fi-FI</option>
        </select>
      </I18nProvider>
    );
  }
}

Base.propTypes = {
  locale: React.PropTypes.string,
};

Base.defaultProps = {
  locale: 'en',
};

export default () => <Base />;
