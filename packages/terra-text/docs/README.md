# Terra Text

The font size, font weight, font family, and font color in terra components are set to defaults in terra-base which is then inherited into all components. Components can override these base styles as needed in their specific component CSS. In some cases, you may need text that differs from the base font styles, though, the text doesn't belong to a specific component.

In these cases, the text component may be helpful. Using terra-text, you can create text that differs from the base text styles by changing the font size, font weight, and color.

However, there are some drawbacks to be aware of with this component. The styles set with this component are not themable and will be static. If this is a concern, we recommend building a custom component that handles your font styles that need to differ from the base font styles so you can control the themability of them.

> Note: The inner `<span />` can be accessed via the `ref` to a `<Text />`.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-text`

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

## Usage

```jsx
import React from 'react';
import Text from 'terra-text';

<Text>Hello World</Text>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
