import React from 'react';
import PropTypes from 'prop-types';
import { I18nProvider, i18nLoader } from 'terra-i18n';
import './baseStyles';

const propTypes = {
  /**
   * The component(s) that will be wrapped by `<Base />`.
   */
  children: PropTypes.node.isRequired,
  /**
   * The locale name.
   */
  locale: PropTypes.string,
  /**
   * Customized translations provided by consuming application only for current locale.
   */
  /* eslint-disable consistent-return */
  customMessages: (props, propName, componentName) => {
    if (Object.keys(props[propName]).length !== 0 && props.locale === undefined) {
      return new Error(`Missing locale prop for ${propName} in ${componentName} props`);
    }
  },
  /**
   * Activates [React Strict Mode](https://reactjs.org/docs/strict-mode.html) for descendants
   */
  strictMode: PropTypes.bool,
  /**
   * The component(s) that will be wrapped by `<Base />` ONLY
   * in the event that translations have not been loaded yet.
   * NOTE: Absolutely no locale-dependent logic should be
   * utilized in this placeholder.
   */
  translationsLoadingPlaceholder: PropTypes.node,
};

const defaultProps = {
  customMessages: {},
  strictMode: false,
};

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areTranslationsLoaded: false,
      locale: props.locale,
      messages: {},
    };
  }

  componentDidMount() {
    const { locale } = this.props;

    if (locale !== undefined) {
      try {
        i18nLoader(this.props.locale, this.setState, this);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }
  }

  componentDidUpdate(prevProps) {
    const { locale } = this.props;

    if (locale !== undefined && locale !== prevProps.locale) {
      try {
        i18nLoader(this.props.locale, this.setState, this);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }
  }

  render() {
    const {
      children,
      locale,
      customMessages,
      strictMode,
      translationsLoadingPlaceholder,
      ...customProps
    } = this.props;

    const messages = Object.assign({}, this.state.messages, customMessages);
    const renderChildren = strictMode ? (<React.StrictMode>{children}</React.StrictMode>) : children;

    if (!this.state.areTranslationsLoaded) return <div>{this.props.translationsLoadingPlaceholder}</div>;
    return (
      <I18nProvider
        {...customProps}
        locale={this.state.locale}
        messages={messages}
      >
        {renderChildren}
      </I18nProvider>
    );
  }
}

Base.propTypes = propTypes;
Base.defaultProps = defaultProps;

export default Base;
