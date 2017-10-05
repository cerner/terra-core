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
      return new Error(
        `Missing locale prop for ${propName} in ${componentName} props`,
      );
    }
  },
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
    if (this.props.locale !== undefined) {
      i18nLoader(this.props.locale, this.setState, this);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props === nextProps) return;
    if (nextProps.locale !== undefined) {
      i18nLoader(nextProps.locale, this.setState, this);
    }
  }

  render() {
    const {
      children,
      locale,
      customMessages,
      translationsLoadingPlaceholder,
      ...customProps
    } = this.props;

    const messages = Object.assign({}, this.state.messages, customMessages);

    if (locale === undefined) {
      return (<div {...customProps}>{children}</div>);
    }

    if (!this.state.areTranslationsLoaded) return <div>{this.props.translationsLoadingPlaceholder}</div>;
    return (
      <I18nProvider {...customProps} locale={this.state.locale} messages={messages}>
        {children}
      </I18nProvider>
    );
  }
}

Base.propTypes = propTypes;

Base.defaultProps = defaultProps;

export default Base;
