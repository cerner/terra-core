# Terra Show Hide

Show Hide Component that will show a preview of content and then expand it with a Show More button.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-show-hide`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

<details>
<summary>View information on this component's peer dependencies.</summary>

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |
| react-intl | ^2.8.0 |


</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## Implementation Notes:

The Show-Hide component must be composed inside the [Base][1] component with a locale in order for it to load the correct translation strings.

[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs

## Usage

```jsx
import React from 'react';
import ShowHide from 'terra-show-hide';

  <ShowHide preview="Lorem ipsum dolor sit amet">
    {Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.}
  </ShowHide>
```

## Component Features

* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
* [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
* [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
* [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)
