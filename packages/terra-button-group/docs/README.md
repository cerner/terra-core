# Terra Button Group

 The Terra Button Group component groups buttons and maintains a toggle selection state. This component is intended to group buttons with similar context or to toggle content, it is not intended to be used as a form element.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-button-group`
  - `yarn add terra-button-group`

## Usage

```jsx
import React from 'react';
import ButtonGroup from 'terra-button-group';

// Default button group
  <ButtonGroup>
    <ButtonGroup.Button text="Button 1" key="button1" />
    <ButtonGroup.Button text="Button 2" key="button2" />
  </ButtonGroup>

// Selectable (toggle style) button group with second button pre-selected
  <ButtonGroup isSelectable>
    <ButtonGroup.Button text="Button 1" key="button1" />
    <ButtonGroup.Button isSelected text="Button 2" key="button2" />
  </ButtonGroup>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)

