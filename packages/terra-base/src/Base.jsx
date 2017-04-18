import React, { PropTypes } from 'react';

import { I18nProvider, i18nLoader } from 'terra-i18n';

import BaseStyles from './BaseStyles';

const propTypes = {
  /**
   * The component(s) that will be wrapped by `<Base />`.
   */
  children: PropTypes.node.isRequired,
  /**
   * The locale name.
   */
  locale: PropTypes.string.isRequired,
  /**
   * Customized translations provided by consuming application
   * only for current locale.
   */
  customMessages: PropTypes.object,
};

const defaultProps = {
  locale: 'en',
  customMessages: {},
};

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      locale: props.locale,
      messages: {},
    };
  }

  componentDidMount() {
    i18nLoader(this.props.locale, this.setState, this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props === nextProps) return;
    i18nLoader(nextProps.locale, this.setState, this);
  }

  render() {
    if (!this.state.load) return null;

    const {
      children,
      locale,
      customMessages,
      ...customProps
    } = this.props;

    const messages = Object.assign({}, this.state.messages, customMessages);

    return (
      <I18nProvider
        locale={this.state.locale}
        messages={messages}
      >
        <BaseStyles {...customProps}>
          {children}
        </BaseStyles>
      </I18nProvider>
    );
  }
}

Base.propTypes = propTypes;

Base.defaultProps = defaultProps;

export default Base;
