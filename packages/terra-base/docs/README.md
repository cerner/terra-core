# Terra Base

The `terra-base` is a core component to any app built with Terra UI components. The base component handles two concerns, global internationalization concerns and global application styles.

Terra UI provides builtin translations and LTR / RTL support which makes Terra UI powered apps ready to use in several countries with ease. All apps built with Terra UI are required to set up translations, even if they only intend to support English. As we support apps built for use around the world, we want apps to be prepared for internationalization from the beginning of development. It is easier to add additional locales and translations to an app built with internationalization and translations from the beginning compared to retrofitting internalization and translations into an app as it evolves into new markets.

To help with this, the `terra-base` component is used to handle locale changes, manage the locale loading state, and receive customized translation messages from an application and pass them into the `terra-i18n` I18nProvider.

We recommend that this component should wrap the application’s root component such that the entire application is within the same configured i18n context.

The component should also be used with our [aggregate-translations pre-build tool](https://github.com/cerner/terra-toolkit/blob/master/docs/AggregateTranslations.md).

You can read more about [setting up Internationalization in your Terra UI app here](https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/internationalization).

The terra-base component also sets minimal global styles for an application; styles include CSS to help normalize box-sizing, reset margins and paddings, and define global font styles.

## Getting Started

- Install from [npmjs](https://www.npmjs.com): `npm install terra-base`

## Usage

Without custom app translations.

```jsx
import Base from 'terra-base';
import App from './App'; // Your custom app component

// This value could be sent from the server as well
const locale = (navigator.languages && navigator.languages[0])
               || navigator.language
               || navigator.userLanguage
               || 'en';

<Base locale={locale}>
  <App />
</Base>
```

With custom app translations.

```jsx
import Base from 'terra-base';
import App from './App'; // Your custom app component
import appTranslations from './aggregated-translations/en.js'; // Your aggregated app translations

// This value could be sent from the server as well
const locale = (navigator.languages && navigator.languages[0])
               || navigator.language
               || navigator.userLanguage
               || 'en';

<Base locale={locale} customMessages={appTranslations}>
  <App />
</Base>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
* [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
* [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
* [react_on_rails Compatible](https://github.com/shakacode/react_on_rails/blob/8cb06ed35cb5c2c453bcc193282b4c091574c1b7/docs/basics/i18n.md#how-to-add-i18n)
* [CND Compatible](https://github.com/webpack/docs/wiki/configuration#outputpublicpath)
