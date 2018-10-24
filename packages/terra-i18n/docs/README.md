# Terra I18n

The terra-i18n package provides internationalization for React components by loading translations and locale data on demand and providing the translated messages to the component. It does this by utilizing the [`react-intl`](https://github.com/yahoo/react-intl) dependency to provide the formatted translation messages to the supplied React children. To enable this behavior, terra-i18n provides the `i18nLoader` and `I18nProvider` components.

### i18nLoader

The `i18nLoader` component guarantees that the intl polyfill, locale data and translation messages are loaded before the translation-needing component is rendered. This loader should be utilized only once within an application, because all internationalization information is loaded into memory to remove the need to dynamically load locale data on the server.

Note: the `i18nLoader` state object for the callback must contain the following keys to work properly:
- `areTranslationsLoaded` - boolean
- `locale` - string
- `messages` - key-value pairs such that the key is the message name and the value is the translation message

### I18nProvider

The `I18nProvider` component configures the react-intl's `IntlProvider` and supplies it with the translation-needing components such that the i18n context is accessible. Usually, one `I18nProvider` will wrap an application's root component such that the entire application is within the same configured i18n context, however it is possible to render nested `I18nProvider` components to provide different, or modified i18n context.

### Supported Locales

| Locale ID | Locale |
|-|-|
| ar | Arabic |
| en | English |
| en-US | English - United States |
| en-GB | English - Great Britain |
| es | Spanish |
| es-US | Spanish - United States |
| es-ES | Spanish - Spain (Traditional) |
| de | German |
| fi-FI | Finnish - Finland |
| fr | French |
| fr-FR | French - France|
| nl | Dutch |
| nl-BE | Dutch (Belgium)|
| pt | Portuguese |
| pt-BR | Portuguese - Brazil|
| sv | Swedish |
| sv-SE | Swedish (Sweden) |

#### Non-Supported Locales

It is possible to add and load non-supported locales with `terra-i18n`, however one must ensure the locales are supported by `react-intl`, otherwise no locale-data will exist and loading the intl data will result in an error. Once confirmed that the locale is supported by `react-intl`, one is responsible for including the appropriate translations messages for each terra component used in your application, otherwise the translations will fail and `react-intl` will display the message name as the fallback.

### Locale Fallback

The `i18nLoader` loads internationalized information from the translationLoader and intlLoader modules, both which utilize a locale fallback strategy. This implemented fallback strategy when loading a locale is:

1. Try the regional locale (if applicable)
2. Try the base locale
3. Try the 'en' base locale
4. Throw an error if 'en' is not provided

**Note:** This fallback strategy is only applied when an aggregated translation file does not exist. For example if the 'es' locale is loaded and the translation for `Terra.button.close` is missing, `react-intl` will display the `Terra.button.close` message name, not the english translation, because locale data was only loaded for 'es'. The `terra-i18n` package does not support loading multiple locales at once. This ensures an application will never have a mix of 'es' and 'en' translations.

### Aggregating Translations

To successfully render an internationalized component, all translation information must be provided as a single file for each locale. The terra-i18n package provides the `aggregate-translations` pre-build tool to assist with creating the translation, intl loader and translation loader files that are configured for the specified locales. This tool is offered as a CLI script and as a setup function.

See the [aggregate-translations documentation](https://github.com/cerner/terra-core/blob/master/packages/terra-i18n/docs/AggregateTranslations.md).

## Getting Started

It is recommended to use the `terra-base` component implementation; `terra-base` will handle locale changes, manage the locale loading state and receive customized translation messages from an application and pass them into the `I18nProvider`. See [`terra-base documentation`](https://github.com/cerner/terra-core/tree/master/packages/terra-base) to get started.

However, terra-i18n can be installed with [npmjs](https://www.npmjs.com):
  - `npm install terra-i18n`
  - `yarn add terra-i18n`

## Usage

The best example is the `terra-base` [implementation](https://github.com/cerner/terra-core/blob/master/packages/terra-base/src/Base.jsx)
. Which can be summarized in the following example as:

```jsx
import React from 'react';
import { I18nProvider, i18nLoader } from 'terra-i18n';

export default class ExampleLoader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      areTranslationsLoaded: false,
      locale: props.locale,
      messages: {},
    };
  }

  componentDidMount() {
    // Load the internationalization information
    i18nLoader(this.state.locale, this.setState, this);
  }

  render() {
    // Do not render components or the provider until translations and locale
    // data are loaded.
    if (!this.state.areTranslationsLoaded) {
      return null;
    }

    // Render the internationalized components
    return (
      <I18nProvider locale={this.state.locale} messages={this.state.messages}>
        {this.props.children}
      </I18nProvider>
    );
  }
}
```

## Creating Internationalized Components

Once an application is setup to support internationalization, the next step is to create internationalized components and provide the translation messages. Use [this documentation](https://github.com/cerner/terra-core/wiki/InternationalizeGuide) as a guide for integrating internationalization into an application.


## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
* [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
* [react_on_rails Compatible](https://github.com/shakacode/react_on_rails/blob/8cb06ed35cb5c2c453bcc193282b4c091574c1b7/docs/basics/i18n.md#how-to-add-i18n)
* [CND Compatible](https://github.com/webpack/docs/wiki/configuration#outputpublicpath)
