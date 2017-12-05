# Terra Tabs

Tabs are containers used to organize content. They allow for quick switching between groups of contextually related content. Content is divided into different containers and each container is viewable one at a time. The user can switch between containers by selecting the corresponding tab control.

Tabs are meant for organizing content that doesn’t need to be compared or accessed simultaneously or if the user needs quick access through a group of contextually related content. Tabs are not intended for navigation.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-tabs`

## Usage

### Controlled
```jsx
import React from 'react';
import Tabs from 'terra-tabs';

<Tabs>
</Tabs>
```

### Uncontrolled

### Note
The tabs component will apply the prop `isLabelHidden` to the component passed as content for Tabs.Pane. This will indicate if any of the tabs are icon only or have been truncated. When this prop is true a header should be rendered in the content area to for accessibility purposes.

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
