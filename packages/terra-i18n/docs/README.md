# Terra I18n

## Getting Started

This component is not intended for direct usage by developers. It is recommended to use the `terra-base` component instead which acts as an abstraction around terra-i18n and react-intl's Intl Provider component. See [`terra-base documentation`](https://github.com/cerner/terra-core/tree/master/packages/terra-base) to get started.

However, terra-i18n can be installed with [npmjs](https://www.npmjs.com):
  - `npm install terra-i18n`
  - `yarn add terra-i18n`

The terra-i18n package provides internationalization for React components by loading translations and locale data on demand and providing the translated messages to the component. It does this by utilizing the [`react-intl`](https://github.com/yahoo/react-intl) dependency to provide the formatted translation messages to the supplied React children. To enable this behavior, terra-i18n provides the `i18nLoader` and `I18nProvider` components.

## i18nLoader

The `i18nLoader` component guarantees that the Intl polyfill, locale data and translation messages are loaded before the translation-needing component is rendered. _This loader should be utilized only once within an application, because all internationalization information is loaded into memory to remove the need to dynamically load locale data on the server._

Note: the `i18nLoader` state object for the callback must contain the following keys to work properly:
- `areTranslationsLoaded` - _boolean_
- `locale` - _string_
- `messages` - _key-value pairs such that the key is the message name and the value is the translation message_

## I18nProvider

The `I18nProvider` component configures the react-intl's `IntlProvider` and supplies it with the translation-needing components such that the i18n context is accessible. Usually, one `I18nProvider` will wrap an application's root component such that the entire application is within the same configured i18n context, however it is possible to render nested `I18nProvider` components to provide different, or modified i18n context.

### Supported Locales

[You can view a list of locales supported by Terra UI here.](https://github.com/cerner/terra-aggregate-translations/blob/master/config/i18nSupportedLocales.js)

### Non-Supported Locales

It is possible to add and load non-supported locales with `terra-i18n`, however one must ensure the locales are supported by `react-intl`, otherwise no locale-data will exist and loading the intl data will result in an error. Once confirmed that the locale is supported by `react-intl`, one is responsible for including the appropriate translations messages for each terra component used in your application, otherwise the translations will fail and `react-intl` will display the message name as the fallback.

### Locale Fallback

The `i18nLoader` loads internationalized information from the translationLoader and intlLoader modules, both which utilize a locale fallback strategy. This implemented fallback strategy when loading a locale is:

1. Try the regional locale (if applicable)
2. Try the base locale
3. Try the 'en' base locale
4. Throw an error if 'en' is not provided

**Note:** This fallback strategy is only applied when an aggregated translation file does not exist. For example if the 'es' locale is loaded and the translation for `Terra.button.close` is missing, `react-intl` will display the `Terra.button.close` message name, not the english translation, because locale data was only loaded for 'es'. The `terra-i18n` package does not support loading multiple locales at once. This ensures an application will never have a mix of 'es' and 'en' translations.


## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
* [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
* [react_on_rails Compatible](https://github.com/shakacode/react_on_rails/blob/8cb06ed35cb5c2c453bcc193282b4c091574c1b7/docs/basics/i18n.md#how-to-add-i18n)
* [CND Compatible](https://github.com/webpack/docs/wiki/configuration#outputpublicpath)
