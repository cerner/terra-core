# Split Button

The Split Button provides the user with the ability to choose the primary action or an action from a listing of alternative actions.
An example is email. The primary action is _reply_, but the user can also _forward_ or _reply all_. _Reply_ would be the primary action, while _forward_ and _reply all_ would be contained inside the dropdown.

Children must be the `Item` subcomponent for proper functionality and appearance.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-dropdown-button`

## Implementation Notes:
The SplitButton component must be composed inside the [Base][1] component with a locale in order for it to load the correct translation strings.

[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)
