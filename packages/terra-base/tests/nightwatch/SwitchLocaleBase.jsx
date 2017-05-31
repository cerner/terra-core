import React from 'react';
import { FormattedMessage } from '../../../terra-i18n/node_modules/react-intl';

import Base from '../../lib/Base';

const customMessages = {
  en: {
    'App.locale': 'en',
  },
  'en-US': {
    'App.locale': 'en-US',
  },
};

class SwitchLocaleBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: 'en',
    };
    this.handleSwitchLocale = this.handleSwitchLocale.bind(this);
  }

  handleSwitchLocale() {
    if (this.state.locale !== 'en') {
      this.setState({ locale: 'en' });
    } else {
      this.setState({ locale: 'en-US' });
    }
  }

  render() {
    return (
      <Base
        locale={this.state.locale}
        customMessages={customMessages[this.state.locale]}
      >
        <FormattedMessage id="App.locale" />
        <button onClick={this.handleSwitchLocale}>
          Switch
        </button>
      </Base>
    );
  }
}

export default SwitchLocaleBase;
