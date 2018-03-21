# Terra Base

The `terra-base` component will handle locale changes, manage the locale loading state, and receive customized translation messages from an application and pass theme into the `terra-in18n` I18nProvider. It also sets minimal global styles for an application; styles include CSS to help normalize box-sizing, reset margins and paddings, and define global font styles.

**Note: This component should be imported before the other terra components in your app.** This is to help ensure that these styles are defined at the beginning of the [extracted stylesheet](https://github.com/webpack-contrib/extract-text-webpack-plugin) and are inherited down to the other terra components. Additionally, when used to internationalize an application, it will wrap the application’s root component such that the entire application is within the same configured i18n context.

- [Getting Started](#getting-started)
- [Documentation](https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs)
- [LICENSE](#license)

## Getting Started

- Install from [npmjs](https://www.npmjs.com): `npm install terra-base`

## Usage

- **Recommended:** Consume `Base` with translations:
```
import Base from 'terra-base';
<Base locale={localeByBackend} customMessages={translationsByBackend}>
  ...
</Base>
```

- Consume `Base` without translations:
```
import Base from 'terra-base';
<Base>
  ...
</Base>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
* [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
* [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
* [react_on_rails Compatible](https://github.com/shakacode/react_on_rails/blob/8cb06ed35cb5c2c453bcc193282b4c091574c1b7/docs/basics/i18n.md#how-to-add-i18n)
* [CND Compatible](https://github.com/webpack/docs/wiki/configuration#outputpublicpath)
