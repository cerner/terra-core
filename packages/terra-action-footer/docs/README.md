# Terra Action Footer

The Terra Action Footer is a footer bar that contains two sockets, start and end, to place items in the form of buttons and hyperlinks used to perform actions.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-action-footer`

## Usage

### Action Footer with a Start and End Actions
```jsx
import React from 'react';
import ActionFooter from 'terra-action-footer';
import Button from 'terra-button';

<ActionFooter
  start={<a href="/link/to/somewhere">A link</a>}
  end={
    <div>
      <Button text="Left End Button"/>
      <Button text="Right End Button"/>
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

Terra also provides a Centered Action Footer variant.
* [Centered Action Footer](https://github.com/cerner/terra-core/tree/master/packages/terra-action-footer/docs/CenteredActionFooter.md)

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
