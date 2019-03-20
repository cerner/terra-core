import React from 'react';
import PropTypes from 'prop-types';
import { I18nProvider, i18nLoader } from 'terra-i18n';
import ThemeProvider from 'terra-theme-provider';
import './baseStyles';

const propTypes = {
  /**
   * The component(s) that will be wrapped by `<Base />`.
   */
  children: PropTypes.node.isRequired,
  /**
   * The fill prop sets a `height: 100%` style on the base component and it's theme provider
   */
  fill: PropTypes.bool,
  /**
   * The root fill prop sets a `height: 100%` style on the `#root` selector. This selector is commonly used for mounting a react app into the DOM.
   */
  rootFill: PropTypes.bool,
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
   *  Provides first class prop for custom inline styles
   */
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  /**
   * Name of class for specified theme. e.g cerner-clinical-theme. This class name is applied to the HTML element.
   */
  themeName: PropTypes.string,
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
  fill: true,
  rootFill: true,
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
    const { locale, rootFill } = this.props;

    if (locale !== undefined) {
      try {
        i18nLoader(this.props.locale, this.setState, this);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }

    if (rootFill) {
      const root = document.getElementById('root');
      root.style.height = '100%';
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
      fill,
      rootFill,
      locale,
      customMessages,
      strictMode,
      style,
      translationsLoadingPlaceholder,
      ...customProps
    } = this.props;

    const messages = Object.assign({}, this.state.messages, customMessages);
    const renderChildren = strictMode ? (<React.StrictMode>{children}</React.StrictMode>) : children;

    const fillStyles = fill ? { height: '100%' } : {};
    const customStyles = fill ? Object.assign(fillStyles, style) : style;

    if (!this.state.areTranslationsLoaded) return <div>{this.props.translationsLoadingPlaceholder}</div>;
    return (
      <I18nProvider
        style={customStyles}
        {...customProps}
        locale={this.state.locale}
        messages={messages}
        data-terra-base
      >
        {/* TO DO - Add docs on theme provider usages in terra-base */}
        <ThemeProvider style={fillStyles} themeName={this.props.themeName} isGlobalTheme>
          {renderChildren}
        </ThemeProvider>
      </I18nProvider>
    );
  }
}

Base.propTypes = propTypes;
Base.defaultProps = defaultProps;

export default Base;
