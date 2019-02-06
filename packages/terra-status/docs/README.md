# Terra Status

The status component provides a customizable color indictor to signify a specific condition.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-status`
  - `yarn add terra-status`

## Usage

```jsx
import React from 'react';
import Status from 'terra-status';

<Status className="high-status"><div>Hello</div></Status>
<Status className="good-status"><div>Hello</div></Status>
<Status className="blue-status"><div>Hello</div></Status>
```

```css
.high-status {
  border-left-color: red;
}

.good-status {
  border-left-color: #00ff00;
}

.blue-status {
  border-left-color: rgb(0,0,255);
}
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
