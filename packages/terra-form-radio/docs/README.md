# Terra Form Radio

The Terra Form Radio is a responsive input component rendered as a radio button next to label text. When activated, a dot shall appear. Use the `name` attribute to group radio buttons together. Tabbing switches focus between radio button groups; arrow keys switch between radio buttons of the same group. The checked state can be activated with the space bar.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-form-radio`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

<details>
<summary>View information on this component's peer dependencies.</summary>

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |


</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## Implementation Notes:

The Form-Radio component must be composed inside the [Base][1] component with a locale in order for it to load the correct translation strings.

[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-base/docs

## Usage

```jsx
import React from 'react';
import Radio from 'terra-form-radio';

<Radio id="first-radio" labelText="First Radio" name="example" defaultChecked />
<Radio id="second-radio" labelText="Second Radio" name="example" />
```

## Jest Tests:
* This component requires `window.matchMedia` to be mocked in Jest tests. To do so add the following to the top of your test file(s) that use this component:
    ```
    window.matchMedia = () => ({ matches: true });
    ```

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)
