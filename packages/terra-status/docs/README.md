# Terra Status

The status component provides a customizable color indictor to signify a specific condition.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-status`
  - `yarn add terra-status`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |



<!-- AUTO-GENERATED-CONTENT:END -->

## Usage

```jsx
import React from 'react';
import Status from 'terra-status';

<Status className="high-status"><div>Hello</div></Status>
<Status className="good-status"><div>Hello</div></Status>
<Status className="blue-status"><div>Hello</div></Status>
```

```css
:root {
  --my-app-status-attention-color: red;
  --my-app-status-success-color: #00ff00;
  --my-app-status-info-color: rgb(0,0,255);
}

.attention {
  border-left-color: var(--my-app-status-attention-color, red);
}

.success {
  border-left-color: var(--my-app-status-success-color, #00ff00);
}

.info {
  border-left-color: var(--my-app-status-info-color, rgb(0,0,255));
}
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
