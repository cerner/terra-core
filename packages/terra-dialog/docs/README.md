# Terra Dialog

Dialogs are temporary views that can be used in a myriad of ways. Dialogs have the ability to alert users to act on critical information. In doing so, Dialogs may allow users to avoid destructive decisions, and also extend user workflows without disorienting the user.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-dialog`

## Usage

```jsx
import React from 'react';
import Dialog from 'terra-dialog';

const header = 'Header Content';

const footer = <div>Footer Content</div>;

const body = (<div>
  <p>This is my body content.</p>
  <p>This is some more content.</p>
</div>);

<Dialog header={header} footer={footer} onClose={() => alert('Close')} >
  {body}
</Dialog>
```

Note: This component has an i18n dependency that requires setup per [these steps](https://github.com/cerner/terra-core/#internationalization-i18n).

## Component Features

<!-- Uncomment supported features.
 * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)
 -->
