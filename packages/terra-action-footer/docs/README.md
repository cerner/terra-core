# Terra Action Footer

The terra-action-footer component is a footer bar that contains two sockets, start and end, for placing actionable items such as buttons and hyperlinks. If no actions are provided, the footer bar collapses to a themeable height and maintains the top border.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-action-footer`

## Usage

### Action Footer with Start and End Actions
```jsx
import React from 'react';
import ActionFooter from 'terra-action-footer';
import Button from 'terra-button';

<ActionFooter
  start={<a href="/link/to/somewhere">A link</a>}
  end={
    <div>
      <Button text="Submit"/>
      <Button text="Cancel"/>
    </div>
  }
/>
```

### Empty Action Footer
```jsx
import React from 'react';
import ActionFooter from 'terra-action-footer';

<ActionFooter />
```

Terra also provides a Centered Action Footer variation.
* [Centered Action Footer](https://github.com/cerner/terra-core/tree/master/packages/terra-action-footer/docs/CenteredActionFooter.md)

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)
