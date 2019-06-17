# Terra Base Upgrade Guide

## Changes from 4.0 to 5.0
* To upgrade to terra-base v5, you now need to define a locale via the locale prop when using the `<Base>` component.
* Any react-intl based exports that you were importing from terra-base should now be imported directly from react-intl.

```diff
- import { injectIntl, intlShape, FormattedMessage, IntlProvider } from terra-base;
+ import { injectIntl, intlShape, FormattedMessage, IntlProvider } from react-intl;
```

## Changes from 3.0 to 4.0

### Changes to CSS Custom Properties

The following transitive dependency had breaking changes. See its upgrade guide for more information.
* terra-doc-template
